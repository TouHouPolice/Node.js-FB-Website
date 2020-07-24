"use strict";

var db = require('../db-connection');

class AllergensDB{

    getAllergensByMealId(allergens,callback){
        var sql = "SELECT * FROM meal_allergens WHERE meal_id = ?";

        db.query(sql,[allergens.getMealId()] ,callback);

    }


}

module.exports=AllergensDB;