"use strict";

const User = require('../models/User');
const UserDB = require('../models/UserDB');

var userDB = new UserDB();

// This function authenticates by comparing the input password and password 
// from the database.
function authenticate(request, respond) {
    var input_id = request.body.id; // id from user input
    var input_password = request.body.password; // password from user input
    var msg = "";

    // Call the getLoginCredentials function from UserDB
    userDB.getLoginCredentials(input_id, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If user can be found, result has one record
            if (result.length > 0) {
                if (input_password == result[0].password) {
                    msg = "Success";
                    console.log(msg);
                    
                    
                } else {
                    console.log(result[0].password)
                    msg = "Fail!";
                    console.log(msg);
                }
            } else { // If user not found, result has no record
                console.log(input_id)
                msg = "User not found";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

// This function authenticates by using the database to look for 
// the requested username and password.
function authenticateByDB(request, respond) {
    var input_id = request.body.id;
    var input_password = request.body.password;
    var msg = "";

    userDB.authenticateByDB(input_id, input_password, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If the record can be found, the result will have one item
            // else it will have no item.
            if (result.length > 0) {
                msg = "Success2!";

            } else {
                msg = "Fail2!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

function updateAccount(request, respond) {
    var now= new Date;
    var input_id = request.body.id; // id from user input
    var input_username = request.body.username;
    // Let's say we are only updating the First Name of a user.
    // Create a new User object with the values from the client.
    // For those fields that you don't need to update, use null value. 
    var user = new User(input_id, input_username ,request.body.password, request.body.avatar,null);

    // Pass the 'user' instance that you created above into the updateUserFirstName function from the userDB class.
    userDB.updateAccount(user, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}
function deleteUser(request,respond){
    var user=new User(request.body.id,null,null);

    userDB.deleteUser(user, function(error,result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}
function createNewAccount(request,respond){
    var now=new Date;
    var user=new User(request.body.id,request.body.username,request.body.password,request.body.avatar,now.toString());

    userDB.createNewAccount(user, function(error,result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
            
        }

    });
}
/*function updateUser(request, respond) {
    // Let's say we are only updating the First Name of a user.
    // Create a new User object with the values from the client.
    // For those fields that you don't need to update, use null value. 
    var user = new User(request.body.username, null, request.body.firstName, null);

    // Pass the 'user' instance that you created above into the updateUserFirstName function from the userDB class.
    userDB.updateUserFirstName(user, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}*/

function getAllUsers(request, respond) {
    userDB.getAllUsers(function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}
function getUserById(request, respond) {
    userDB.getUserById(request.body.id,function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

// This function creates a custom message to be sent back
// to the client. 
function prepareMessage(msg) {
    var obj = { "message": msg };

    return obj;
}

module.exports = { authenticate, authenticateByDB,  getAllUsers,updateAccount,deleteUser,createNewAccount,getUserById };