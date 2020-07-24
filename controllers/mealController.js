"use strict";

const MealsDB = require('../models/MealsDB');

var mealsDB = new MealsDB();

function getAllMeals(request,respond)
{
    //call the getAllMovies() function in the MoviesDB class.
    mealsDB.getAllMeals(function(error,result)
    {
        if(error){
          respond.json(error);
      } else{
          respond.json(result);
      }
    });
};
function getMealsInRange(request,respond)
{
    mealsDB.getMealsInRange(request.body.low,request.body.high,(function(error,result)
    {
        if(error){
          respond.json(error);
      } else{
          respond.json(result);
      }
    }) );
}
function getSimilarMeals(request,respond){
    mealsDB.getSimilarMeals(request.body.Input,(function(error,result)
    {
        if(error){
          respond.json(error);
      } else{
          respond.json(result);
      }
    }) );
}
module.exports ={getAllMeals,getMealsInRange,getSimilarMeals};