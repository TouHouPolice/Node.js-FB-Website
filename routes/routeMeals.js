"use strict";
const mealController = require('../controllers/mealController');

function routeMeals(app)
{
    app.route('/meals')
        .get(mealController.getAllMeals)
    app.route('/mealsInRange')    
        .post(mealController.getMealsInRange);
    app.route('/similarMeals')
        .post(mealController.getSimilarMeals)
}

module.exports ={routeMeals};