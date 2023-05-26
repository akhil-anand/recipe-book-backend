const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Get all recipes
router.get('/allRecipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        console.log(recipes)
        res.json(recipes);
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
});

// Add recipe
router.post('/addRecipe', async (req, res) => {
    const recipe = req.body
    const newRecipe = new Recipe({
        recipeName: req.body.recipeName,
        steps: req.body.steps
    })
    await newRecipe.save()
            .then(() => res.status(200).json({message: 'Recipe added Successfully'}))
            .catch((error) => {
                console.log(error)
                res.status(500).json({ error: 'An error occured while adding the recipe'})})
})

module.exports = router;