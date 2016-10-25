const knex = require('../db/connection');
const bcrypt = require('bcrypt');
const local = require('../auth/local.js');


function getAll(table) {
  return knex(table)
}

function getWhere(table, col, val) {
  return knex(table).where(col, val)
}

function addOne(body) {
  return knex('coffeee').returning('*').insert({
    name: body.name || '',
    decaf: body.decaf || false,
    caffeine: body.caffeine  || 0,
    roast: body.roast || '',
    roaster: body.roaster || '',
    origin: body.origin || '',
    quantity: body.quantity || 0,
    price: body.price || 0
  })
}

function addUser(user) {
  return knex('users').returning('*').insert({
    username: user.username,
    password: bcrypt.hashSync(user.password, 8)
  })
}

function makeToken(user) {
  return local.encodeToken(user[0])
}

function comparePass(pass1, pass2) {
  if (!bcrypt.compareSync(pass1, pass2)) throw new error
}

function ensureAuthenticated(req, res, next) {
  if (!req.headers && !req.headers.authorization) {
    res.status(400).json({
      status: "Add some headers"
    })
  }
  var bool = local.decodeToken(req.headers.token.split(' ')[1])
  if (bool) next()
  else {
    res.status(401).json({
      status: 'user isn\'t valid'
    })
  }
}

module.exports = {
  getAll, getWhere, addOne, addUser, makeToken, comparePass, ensureAuthenticated
}
