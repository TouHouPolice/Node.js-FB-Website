"use strict";
const nutritionController = require('../controllers/nutritionController');

function routeNutrition(app)
{
    app.route('/nutritionInfo/:id')
        .post(nutritionController.getNutritionByMealId);
}

module.exports ={routeNutrition};