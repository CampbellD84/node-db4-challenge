exports.up = function(knex) {
  return knex.schema.createTable("recipeSteps", tbl => {
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
    tbl
      .integer("step_order")
      .unsigned()
      .notNullable();
    tbl.text("instruction").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipeSteps");
};
