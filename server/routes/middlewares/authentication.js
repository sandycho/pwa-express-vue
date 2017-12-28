/**
 * Authentication method
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function authenticate(req, res, next){
  console.log('Authenticated!');
  next();
}

module.exports = authenticate;