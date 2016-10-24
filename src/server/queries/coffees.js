const knex = require('../db/connection');

function getAll(table) {
  return knex(table)
}

function getWhere(table, col, val) {
  return knex(table).where(col, val)
}

module.exports = {
  getAll, getWhere
}
