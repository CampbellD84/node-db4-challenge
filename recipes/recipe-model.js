const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients as i")
    .join("recipes as r", "r.id", "i.recipe_id")
    .select("i.amount", "i.name")
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("recipeSteps as rs")
    .join("recipes as r", "r.id", "rs.recipe_id")
    .select("rs.step_order", "rs.instruction")
    .orderBy("rs.step_order")
    .where({ recipe_id });
}
