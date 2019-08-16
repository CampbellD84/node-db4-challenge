exports.up = function(knex) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl
      .string("amount", 128)
      .unsigned()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
