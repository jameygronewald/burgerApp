const connection = require('./connection');

// `selectAll()`
// `insertOne()`
// `updateOne()`

const orm = {
    selectAll: function(column, table) {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT ?? FROM ??`;
            connection.query(queryString, [column, table], (err, result) => {
            if (err) reject(err);
            resolve(result);
            })
        });  
    },
    insertOne: function(table, column, value) {
        const queryString = 
        `INSERT INTO ?? (??) 
        VALUES(?)`;
        connection.query(queryString, [table, column, value], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(table, column, value, id) {
        const queryString = 
        `UPDATE ?? 
        SET ?? = ? 
        WHERE id = ?`;
        connection.query(queryString, [table, column, value, id], (err, result) => {
            if (err) throw err; 
            console.log(result);
        });
    }
};

module.exports = orm;