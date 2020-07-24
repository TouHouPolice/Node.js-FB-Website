"use strict";
const allergenController = require('../controllers/allergenController');

function routeAllergens(app)
{
    app.route('/allergensInfo/:id')
        .post(allergenController.getAllergensByMealId);
}

module.exports ={routeAllergens};