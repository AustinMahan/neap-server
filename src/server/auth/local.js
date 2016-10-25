const jwt = require('jwt-simple');
const knex = require('../db/connection');
var uuid = require('uuid');
require('dotenv')
var { getAll, getWhere } = require('../queries/coffees.js');

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
    return knex('users').where('id', payload.sub)
    .then(data => data)
  }
}

module.exports = {
  decodeToken, encodeToken
}
