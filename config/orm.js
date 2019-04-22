var connection = require("./connection.js)";

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    ///FIGURE THIS OUT
    insertOne: function(tableInput, colToSearch, valOfCol) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??, ??);";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });

    },
    //FIGURE THIS OUT
    updateOne: function(tableInput, colToSearch, valOfCol) {
        var queryString = "UPDATE burgers SET (burger_name, devoured) VALUES (??, ??);";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });

    }
    
};

module.exports = orm;