var uuid = require('uuid')
var bcrypt = require('bcrypt')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'idk1', password:bcrypt.hashSync('password', 8)}),
        knex('users').insert({username: 'idk1', password:bcrypt.hashSync('password', 8)}),
        knex('users').insert({username: 'idk1', password:bcrypt.hashSync('password', 8)})
      ]);
    });
};
