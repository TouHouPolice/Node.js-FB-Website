"use strict";

const Nutrition = require('../models/Nutrition');
const NutritionDB = require('../models/NutritionDB');

var nutritionDB=new NutritionDB();

function getNutritionByMealId(request, respond) {
    var nutrition= new Nutrition(null,parseInt(request.params.id),null,null,null,null,null,null,null,null)
    nutritionDB.getNutritionByMealId(nutrition,function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

module.exports = {getNutritionByMealId}