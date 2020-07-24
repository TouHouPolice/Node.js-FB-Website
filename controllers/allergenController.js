"use strict";

const Allergens = require('../models/Allergens');
const AllergensDB = require('../models/AllergensDB');

var allergensDB=new AllergensDB();

function getAllergensByMealId(request, respond) {
    var allergens= new Allergens(null,parseInt(request.params.id),null,null,null,null,null,null,null,null)
    allergensDB.getAllergensByMealId(allergens,function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

module.exports = {getAllergensByMealId}