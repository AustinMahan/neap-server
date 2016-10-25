const jwt = require('jwt-simple');
var uuid = require('uuid');
require('dotenv')
const moment = require('moment');

const SECRET = 'process.env.SECRET_KEY'

function encodeToken(user) {
  var datas = {
    exp: moment().add(1, 'days').unix(),
    iat: moment().unix(),
    sub: user.id
  }

  return jwt.encode(datas, SECRET);
}

function decodeToken(token) {
  var now = moment().unix()
  var payload = jwt.decode(token, SECRET)
  if(payload.exp < now) return false;
  else{
    return getWhere('users', 'id', payload.sub)
    .then(data => data.length > 0)
  }
}

module.exports = {
  decodeToken, encodeToken
}
