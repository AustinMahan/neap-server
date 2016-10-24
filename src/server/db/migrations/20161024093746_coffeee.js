
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coffeee', function (table) {
    table.increments();
    table.string('name').unique().notNullable();
    table.string('roaster').notNullable();
    table.string('origin').notNullable();
    table.string('roast').notNullable();
    table.integer('caffeine').notNullable();
    table.boolean('decaf').notNullable();
    table.integer('price').notNullable();
    table.integer('quantity').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.droptTable('coffeee')
};
