var pgp = require("pg-promise")(/*options*/);
const OrmBasic = require("./ormBasic");
/** user.js **/

const TABLE_NAME = 'users';

var User = function (data) {

  OrmBasic.call(this);
  this.tableName = TABLE_NAME;
  this.name = data.name;

}


/**
 * Prototype properties
 */
User.prototype = Object.create(OrmBasic.prototype, {

  data: {
    foo: 'foo'
  },

  whoIAm: {
    value: function () { // override
      console.log('I am an User');
    },
    enumerable: true,
    configurable: true,
    writable: true
  }

});

// defines contructor
User.prototype.constructor = User;


/**
 *  Model methods
 */

User.getById = async function (id) {
  var result = null;

  result = await OrmBasic.getById(TABLE_NAME, id);
  
  return result.status === 'ok' ? result.data : result.error;
}

User.getByCondition = async function (condition) {
  var result = null;

  result = await OrmBasic.getByCondition(TABLE_NAME, condition);

  return result.status === 'ok' ? result.data : result.error;
}

User.getByName = async function(name){
  var result = null;
  var condition = `WHERE name = ${name}`;

  result = await OrmBasic.getByCondition(TABLE_NAME, condition);

  return result.status === 'ok' ? result.data : result.error;
}

module.exports = User;