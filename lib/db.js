var mysql = require('mysql');
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"db_node2"
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Terhubung..!');
	}
});

module.exports = connection;