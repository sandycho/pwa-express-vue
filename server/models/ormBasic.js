
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://sandy:root@localhost:5432/mydb");

/** interface ormBasic.js **/

var OrmBasic = function () {
  // this object is an interface, doesn't need any property
}

OrmBasic.prototype = {

  whoIAm: function () {
    console.log('I am an OrmBasic');
  },

  save: function () {

    db.one(`INSERT INTO ${this.tableName} (name) VALUES ($1)`, [this.name])
      .then(function (data) {
        console.log("DATA:", data.value);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      });

  },

  get: function (condition) {

    db.one(`SELECT * FROM ${this.tableName} WHERE id = $1`, [this.id])
      .then(function (data) {
        console.log("DATA:", data.value);
        return data.value;
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      });

  }

};


/**
 *  Model methods
 */

// returns a Promise
OrmBasic.getById = function (tableName, id) {

  return db.one(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
    .then(function (data) {
      console.log("DATA:", data);
      return success(data);
    })
    .catch(function (error) {
      console.log("ERROR:", error);
      return failure(error);
    });

}

// returns a Promise
OrmBasic.getByCondition = function (tableName, condition) {

  return db.one(`SELECT * FROM ${tableName} WHERE ${condition}`)
    .then(function (data) {
      console.log("DATA:", data);
      return success(data);
    })
    .catch(function (error) {
      console.log("ERROR:", error);
      return failure(error);
    });

}


/**
 * helpers: returned result
 */

function success(data) {
  return { status: 'ok', data: data }
}

function failure(error) {
  return { error: error, data: null }
}

module.exports = OrmBasic;

