'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    app: {
      // configurable paths
      dev:'client',
      dist: 'client/dist'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['exec:bower_install','bowerInstall']
      },
	  jsAdded: {
        files: ['<%= app.dev %>/**/*.js','!<%= app.dev %>/bower_components/**/*.js','!<%= app.dev %>/assets/**/*.js'],
        tasks: ['includeSource','bowerInstall'], //,'jshint:all'
		options: {
		  event: ['added'],
		  spawn: true,
		}
      },
	  jsDeleted: {
        files: ['<%= app.dev %>/**/*.js','!<%= app.dev %>/bower_components/**/*.js','!<%= app.dev %>/assets/**/*.js'],
        tasks: ['includeSource','bowerInstall'], //,'jshint:all'
		options: {
		  event: ['deleted'],
		  spawn: true,
		}
      },
     // js: {
     //   files: ['<%= app.dev %>/**/*.js'],
     //   tasks: [''jshint:all''],
	 //	  event: ['changed'],
	 //	  options: {
	 //		  spawn: false,
     //	  }
     // },
      jsTest: {
        files: ['test/spec/**/*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= app.dev %>/styles/**/*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      less: {
        files: ['<%= app.dev %>/assets/less/*.less'],
        tasks: ['less:server']
      }
	  //,
      //gruntfile: {
      //  files: ['Gruntfile.js'],
	  //	tasks: []
      //}
    },
    nodemon: {
	  dev: {
		script: 'server/server.js',
		options: {
		  args: ['dev'],
		  nodeArgs: [''],
		  callback: function (nodemon) {
			nodemon.on('log', function (event) {
			  console.log(event.colour);
			});
		  },
		  env: {
			PORT: '3000'
		  },
		  cwd: __dirname,
		  ignore: ['node_modules/**'],
		  ext: 'js,coffee',
		  watch: ['server'],
		  delay: 1000,
		  legacyWatch: true
		}
	  },
	  exec: {
		options: {
		  exec: '' //less
		}
	  }
	},
    
    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= app.dev %>/**/*.js',
		'!<%= app.dev %>/bower_components/**/*.js',
		'!<%= app.dev %>/assets/**/*.js'
		
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/**/*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= app.dist %>/.tmp',
            '<%= app.dist %>',
			'.tmp'
          ]
        }]
      },
	  dev: '<%= app.dev %>/.tmp',
      tmp: ['<%= app.dist %>/.tmp','.tmp']
    },

    // Automatically inject Bower components into the app
    bowerInstall: {
      app: {
        src: ['<%= app.dev %>/index.html'],
        ignorePath: '<%= app.dev %>/',
        // we're not going to inject these as they're lazyloaded
        exclude: ['requirejs',
                  'mocha',
                  'jquery.vmap.europe.js',
                  'jquery.vmap.usa.js',
                  'Chart.min.js',
                  'raphael',
                  'morris',
                  'jquery.inputmask',
                  'jquery.validate.js',
                  'jquery.stepy.js',
                  'fullcalendar.js'
                  ]
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= app.dist %>/scripts/{,*/}*.js',
            '<%= app.dist %>/assets/css/{,*/}*.css',

            '<%= app.dist %>/styles/fonts/{,*/}*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= app.dev %>/index.html',
      options: {
        dest: '<%= app.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'], //uglifyjs
              css: ['concat','cssmin'] //cssmin
            },
            post: {}
          }
        }
      }
    },
	
    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= app.dist %>/{,*/}*.html'],
      css: ['<%= app.dist %>/assets/css/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= app.dist %>']
      }
    },
	
	// include source files developed for user in index.html
	includeSource: {
		options: {
		  basePath: 'client',
		  baseUrl: ''
		},
		target: {
		  files: {
			'client/index.html': 'client/index.tpl.html'
		  }
		}
	},

    // The following *-min tasks produce minified files in the dist folder
    cssmin: {
      options: {
        // root: '<%= app.dev %>',
        relativeTo: '<%= app.dist %>',
        processImport: true,
        noAdvanced: true
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dev %>/assets/images',
          src: '**/*.{png,jpg,jpeg,gif}',
          dest: '<%= app.dist %>/assets/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dev %>/images',
          src: '**/*.svg',
          dest: '<%= app.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= app.dist %>',
          src: ['*.html', '**/*.html'],
          dest: '<%= app.dist %>'
        }]
      }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dist %>/scripts',
          src: '*.js',
          dest: '<%= app.dist %>/scripts'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= app.dev %>',
          dest: '<%= app.dist %>',
          src: [
            '*.{ico,png,txt}',
            'index.html',
            //'<%= app.dev %>/**/*.html',
			'assets/img/**/*.*',
            'assets/demo/**/*.*',
            'assets/css/main.css',
			'assets/css/vendor.css',
			'assets/fonts/**/*.*',
            // these files are lazyloaded
            'bower_components/jquery.inputmask/dist/jquery.inputmask.bundle.js',
            'bower_components/jquery-validation/dist/jquery.validate.js',
            'bower_components/jqvmap/jqvmap/maps/jquery.vmap.europe.js',
            'bower_components/jqvmap/jqvmap/maps/jquery.vmap.usa.js',
            'bower_components/stepy/lib/jquery.stepy.js',
            'bower_components/Chart.js/Chart.min.js',
            'bower_components/raphael/raphael.js',
            'bower_components/morris.js/morris.js',
            'bower_components/fullcalendar/fullcalendar.js'
          ]
        }]
      },
      fonts: {
        expand: true,
        flatten: true,
        cwd: '<%= app.dev %>',
        dest: '<%= app.dist %>/assets/fonts',
        src: 'bower_components/font-awesome/fonts/*'
      },
      styles: {
        expand: true,
        cwd: '<%= app.dev %>/assets/css',
        dest: '<%= app.dev %>/.tmp/assets/css',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process	
    concurrent: {
	  runWatchers: {
		tasks: ['exec:run_server','watch'],  //'exec:run_server',
		options: {
		  limit: 5,
		  logConcurrentOutput: true
		}
	  },
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'copy:dist',
        // 'imagemin',
        // 'svgmin'
      ]
    },
    ngtemplates:  {
      app: {
        src:      '<%= app.dev %>/**/*.template.html',
        dest:     '<%= app.dev %>/.tmp/templates.js',
        options:  {
          url:    function(url) { return url.replace('client/', ''); },
          bootstrap: function(module, script) {
            return '/* jshint ignore:start */\n angular.module(\'core.templates2\', []);\n angular.module(\'app\').requires.push(\'core.templates2\')\n angular.module(\'core.templates2\').run([\'$templateCache\', function ($templateCache) {\n'+script+'}])\n/* jshint ignore:end */';
          }
        },
      }
    },

    less: {
      dev: {
        options: {
          // strictMath: true,
          dumpLineNumbers: true,
          sourceMap: true,
          sourceMapRootpath: '',
          outputSourceFiles: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= app.dev %>/assets/less',
            src: 'styles.less',
            dest: '<%= app.dev %>/assets/css',
            ext: '.css'
          }
        ]
      },
      dist: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: [
          {
            expand: true,
            cwd: '<%= app.dev %>/assets/less',
            src: 'styles.less',
            dest: '<%= app.dev %>/assets/css',
            ext: '.css'
          }
        ]
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    processhtml: {
      options: {
        commentMarker: 'prochtml',
        process: true
      },
      dist: {
        files: {
          '<%= app.dist %>/index.html': ['<%= app.dist %>/index.html']
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      }
    },
	exec: {
		  run_server: 'node server/server.js',
		  bower_install: 'bower install'
	}
  });


  grunt.registerTask('dev',[ 
      'clean',
	  'less:dev',
	  'includeSource',
      'bowerInstall',
      //'watch'
	  'concurrent:runWatchers'
    ]);
  
  grunt.registerTask('dist', [
    'clean:dist',
	'ngtemplates',
	'less:dist',
	'includeSource',
    'bowerInstall',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'ngmin',
    'copy:dist',
    'copy:fonts',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
	'clean:tmp',
    // 'htmlmin',
	'exec:run_server'
  ]);
  
   grunt.registerTask('test', [
    'clean:tmp',
    'concurrent:test',
    
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('default', [
    // 'newer:jshint',
    // 'test',
    'dist'
  ]);
  
  grunt.event.on('watch', function(action, filepath, target) {
	  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
};
