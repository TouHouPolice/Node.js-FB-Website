"use strict";

//This if to get the connection to the database
var db=require('../db-connection');//reference of db-connection.js

class MealsDB
{
    getAllMeals(callback)
    {
        var sql = "SELECT * FROM restaurant_web.meal";

        //this is to call the built-in query function in the database connection
        db.query(sql,callback);
    }

    getMealsInRange(low,high,callback){
        var sql="SELECT * FROM meal WHERE price BETWEEN ? AND ? ORDER BY price ASC";

        db.query(sql,[low,high],callback)
    }
    getSimilarMeals(name,callback){
        var sql="SELECT * FROM meal WHERE name LIKE '%?%' ORDER BY name ASC";

        db.query(sql,[name],callback)

    }
}

module.exports=MealsDB;
