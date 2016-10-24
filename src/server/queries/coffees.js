const knex = require('../db/connection');

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

module.exports = {
  getAll, getWhere, addOne
}
