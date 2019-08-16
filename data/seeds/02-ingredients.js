exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "Orange Juice", amount: "half cup" },
        { id: 2, name: "Shaoxing Rice Wine", amount: "quarter cup" },
        { id: 3, name: "Char Siu Sauce", amount: "one cup" },
        { id: 4, name: "Orange", amount: "zest and peel of 2" },
        { id: 5, name: "Dried Chillis", amount: "five or ten" },
        { id: 6, name: "Lemon Juice", amount: "half cup" }
      ]);
    });
};
