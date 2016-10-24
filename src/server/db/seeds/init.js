
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffeee').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coffeee').insert({
          name: 'french',
          roaster:'folgers',
          origin: 'france',
          roast: 'dark',
          caffeine: 100,
          decaf: false,
          price: 6,
          quantity: 1
        }),
        knex('coffeee').insert({
          name: 'sumatra',
          roaster:'folgers',
          origin: 'peru',
          roast: 'dark',
          caffeine: 100,
          decaf: false,
          price: 19,
          quantity: 1
        }),
        knex('coffeee').insert({
          name: 'bazingo',
          roaster:'folgers',
          origin: 'mexico',
          roast: 'dark',
          caffeine: 100,
          decaf: false,
          price: 8,
          quantity: 1
        }),
        knex('coffeee').insert({
          name: 'toffee',
          roaster:'folgers',
          origin: 'colombia',
          roast: 'dark',
          caffeine: 100,
          decaf: false,
          price: 9,
          quantity: 1
        }),
        knex('coffeee').insert({
          name: 'breakfast',
          roaster:'folgers',
          origin: 'pakistan',
          roast: 'dark',
          caffeine: 100,
          decaf: false,
          price: 9,
          quantity: 1
        })
      ]);
    });
};
