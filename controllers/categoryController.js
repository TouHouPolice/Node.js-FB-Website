const CategoriesDB = require('../models/CategoriesDB');
var categoriesDB = new CategoriesDB()

function getAllCategories(request, respond) {
    categoriesDB.getAllCategories(function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
};

function getMealsByCategory(request,respond){
    categoriesDB.getMealsByCategory(request.body.category,function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });

}

module.exports={getAllCategories,getMealsByCategory}