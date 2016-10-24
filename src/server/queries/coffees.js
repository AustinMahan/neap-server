const knex = require('../db/connection');

function getAll(table) {
  return knex(table)
}

function getWhere(table, col, val) {
  return knex(table).where(col, val)
}

function addOne(body) {
  return knex('coffeee').insert({
    name: body.name,
    decaf: body.decaf || false,
    caffeine: body.caffeine,
    roast: body.roast,
    roaster: body.roaster,
    origin: body.origin,
    quantity: body.quantity,
    price: body.price
  })
}

module.exports = {
  getAll, getWhere, addOne
}
