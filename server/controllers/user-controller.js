var dir_path = require('dir_path');
var mysql = require('mysql');

// TODO: provide uniform password for database
var connection = mysql.createConnection({
	
	host		: 	'localhost',
	user		: 	'root',
	password	: 	'cheese_ball',
	database	: 	'social_net'		

});

