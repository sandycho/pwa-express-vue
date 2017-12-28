/** user.js **/

var User = function (data) {
  this.data = data;
}

User.prototype.data = {}

User.prototype.changeName = function (name) {
  this.data.name = name;
}

User.findById = function (id, callback) {
  return new User({name: 'sandy'})
}

module.exports = User;