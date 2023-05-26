const mongoose = require('mongoose');

const stepsSchema = {
    stepName: String,
    instructions: Array
}

const recipeSchema = new mongoose.Schema({    
recipeName: { type: String, required: true },
rating: { type: Number, required: false },
steps: { type: [stepsSchema], required: false}
})

module.exports = mongoose.model('Recipe', recipeSchema, 'recipes-collection')