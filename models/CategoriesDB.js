"use strict";

var db = require('../db-connection');

class CategoriesDB{

    getAllCategories(callback){
        var sql = "SELECT * FROM meal_category ORDER BY category ASC ";

        db.query(sql ,callback);

    }
    

    getMealsByCategory(category,callback){
        var sql="SELECT * FROM meal_category  WHERE category=?  ORDER BY meal_id ASC";
        db.query(sql,[category],callback)
    }

}

module.exports=CategoriesDB;