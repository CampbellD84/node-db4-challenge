exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Orange Chicken", dish_id: 1 },
        { id: 2, name: "Lemon Chicken", dish_id: 2 },
        { id: 3, name: "General Tso Chicken", dish_id: 3 },
        { id: 4, name: "Boneless Spare Ribs", dish_id: 4 }
      ]);
    });
};
