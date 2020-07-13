const orm = require('../config/orm')

const burger = {
  
  selectAllBurgers: cb => {
    orm.selectAll('burgers', result => {
      cb(result)
    })
  },

  createBurger: (column, value, cb) => {
    orm.insertOne('burgers', column, value, result => {
      cb(result);
    });
  },

  updateBurger: (column, value, id, cb) => {
    orm.updateOne('burgers', column, value, id, result => {
      cb(result);
    });
  }
};

module.exports = burger;