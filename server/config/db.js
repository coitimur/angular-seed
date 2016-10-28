
//var nconf = require('nconf');
//  nconf.argv().env();//.file({ file: '../config.json' });
  //nconf.load();

var env=process.env.NODE_ENV || 'dev';

var connect_options={};

if(env=='dev'){
	connect_options = {
            host: 'localhost', // server name or IP address;
            port: 5432,
            database:'postgres',
            user:  'postgres',
            password: '1234'
        };
}else{
	connect_options = {
            host: process.env.DB_HOST || 'localhost', // server name or IP address;
            port: process.env.DB_PORT || 5432,
            database: process.env.DB_DATABASE || 'postgres',
            user: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASSWORD || '1234'
        };
	//connect_options='postgres://pzklycnjgyvdev:8OYkStFLzs0HntkhnO7YqwQtHP@ec2-54-75-232-53.eu-west-1.compute.amazonaws.com:5432/db682e369h5nl6';


		
}
console.log('DB_CONFIG:'+JSON.stringify(connect_options));
exports.connect_options=connect_options;

/*
exports.connect_options = {
            host: nconf.get('DB_HOST') || 'localhost', // server name or IP address;
            port: nconf.get('DB_PORT') || 5432,
            database: nconf.get('DB_DATABASE') || 'postgres',
            user: nconf.get('DB_USER') || 'postgres',
            password: nconf.get('DB_PASSWORD') || '1234'
        };



exports.connect_optionsXXX = {
            host: process.env.DB_HOST || 'localhost', // server name or IP address;
            port: process.env.DB_PORT || 5432,
            database: process.env.DB_DATABASE || 'postgres',
            user: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASSWORD || '1234'
        };

*/