const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

// function getShoppingList(recipe_id) {
//   return db("recipeIngredients as ri")
//     .join("recipes as r", "r.id", "ri.recipe_id")
//     .join("ingredients as i", "i.recipe_id", "ri.recipe_id")
//     .select("i.amount", "i.name")
//     .where({ recipe_id });
// }

function getInstructions(recipe_id) {
  return db("recipeSteps as rs")
    .join("recipes as r", "r.id", "rs.recipe_id")
    .select("rs.step_order", "rs.instruction")
    .orderBy("rs.step_order")
    .where({ recipe_id });
}
