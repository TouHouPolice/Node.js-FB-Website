"use strict";
const categoryController = require('../controllers/categoryController');

function routeCategories(app)
{
    app.route('/categories')
        .get(categoryController.getAllCategories)
    app.route('/mealsByCate')    
        .post(categoryController.getMealsByCategory);
}

module.exports ={routeCategories};