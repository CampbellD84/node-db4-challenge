const express = require("express");

const Recipes = require("../recipes/recipe-model");

const router = express.Router();

router.get("/", async (req, res) => {
  const recipe = await Recipes.getRecipes();

  try {
    res.json(recipe);
  } catch ({ err }) {
    res.status(500).json({ err, message: "Could not retrieve recipe." });
  }
});

// router.get("/:id/shoppingList", async (req, res) => {
//   const { id } = req.params;
//   const shopList = await Recipes.getShoppingList(id);

//   try {
//     if (shopList) {
//       res.json(shopList);
//     } else {
//       res.status(404).json({
//         message: `Shopping list with id of ${id} could not be found.`
//       });
//     }
//   } catch ({ err }) {
//     res.status(500).json({ err, message: "Could not retrieve shopping list." });
//   }
// });

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  const steps = await Recipes.getInstructions(id);

  try {
    if (steps) {
      res.json(steps);
    } else {
      res
        .status(404)
        .json({ message: "Instructions for this recipe do not exist." });
    }
  } catch ({ err }) {
    res
      .status(500)
      .json({ err, message: "Could not retrieve recipe instructions." });
  }
});

module.exports = router;
