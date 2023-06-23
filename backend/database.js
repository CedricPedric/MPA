var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "music_database"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM music", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});