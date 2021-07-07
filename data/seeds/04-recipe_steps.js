exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipeSteps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipeSteps").insert([
        {
          recipe_id: 1,
          step_order: 1,
          instruction: "Cut Chicken into small pieces."
        },
        { recipe_id: 1, step_order: 2, instruction: "Marinate Chicken." },
        {
          recipe_id: 1,
          step_order: 3,
          instruction: "Dredge Chicken in flour and fry."
        },
        {
          recipe_id: 2,
          step_order: 1,
          instruction: "Cut Chicken into small pieces."
        },
        {
          recipe_id: 3,
          step_order: 1,
          instruction: "Cut Chicken into small pieces."
        },
        {
          recipe_id: 4,
          step_order: 1,
          instruction: "Cut Pork into small pieces."
        },
        {
          recipe_id: 3,
          step_order: 4,
          instruction: "Toss chillis into wok with chicken."
        }
      ]);
    });
};
