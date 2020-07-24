"use strict"

const express = require('express');
const bodyParser = require('body-parser');
//const routes = require('./routes/routeComments');
const routeMeals=require('./routes/routeMeals')
const routeUsers=require('./routes/routeUsers');
const routeComments=require('./routes/routeComments');
const routeNutrition=require('./routes/routeNutrition')
const routeAllergens=require('./routes/routeAllergens')
const routeCategories=require('./routes/routeCategories')

var app = express();
var host = "127.0.0.1";
var port = 8080;
var home_file = "/index.html";

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes.routeComments(app);
routeMeals.routeMeals(app);
routeUsers.routeUsers(app);
routeNutrition.routeNutrition(app)
routeComments.routeComments(app);
routeAllergens.routeAllergens(app);
routeCategories.routeCategories(app);

function gotoIndex(f, request, respond) {
    respond.sendFile(__dirname + f);
}

app.get(home_file, gotoIndex);

// Starts the Web Server
var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});