exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { id: 1, name: "Orange Chicken" },
        { id: 2, name: "Lemon Chicken" },
        { id: 3, name: "General Tso Chicken" },
        { id: 4, name: "Boneless Spare Ribs" }
      ]);
    });
};
