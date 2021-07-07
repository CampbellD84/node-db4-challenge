exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dishes");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};
