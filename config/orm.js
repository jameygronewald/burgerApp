const connection = require('./connection');

const orm = {
    selectAll: function(table, cb) {
        const queryString = `SELECT * FROM ??`;
        connection.query(queryString, [table], (err, result) => {
            if (err) throw (err);
            cb(result);
        });  
    },
    insertOne: function(table, column, value, cb) {
        const queryString = 
        `INSERT INTO ?? (??) 
        VALUES(?)`;
        connection.query(queryString, [table, column, value], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, column, value, id, cb) {
        const queryString = 
        `UPDATE ?? 
        SET ?? = ? 
        WHERE id = ?`;
        connection.query(queryString, [table, column, value, id], (err, result) => {
            if (err) throw err; 
            cb(result);
        });
    }
};

module.exports = orm;