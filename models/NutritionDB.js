"use strict";

var db = require('../db-connection');

class NutritionDB{

    getNutritionByMealId(nutrition,callback){
        var sql = "SELECT * FROM meal_nutrition WHERE meal_id = ? ";

        db.query(sql,[nutrition.getMealId()] ,callback);

    }


}

module.exports=NutritionDB;