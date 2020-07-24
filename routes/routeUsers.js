"use strict";

const userController = require('../controllers/userController');

function routeUsers(app) {

    // This URL will authenticate by comparing passwords    
    app.route('/login')
        .post(userController.authenticate);

    // This URL will authenticate by using the database
    app.route('/loginByDB')
        .post(userController.authenticateByDB);

    app.route('/users')
        .get(userController.getAllUsers);

    // This URL will update     
    app.route('/users/:id')
        
        .delete(userController.deleteUser); 
    app.route('/userInfo')
        .post(userController.getUserById);
    app.route('/update')
        .put(userController.updateAccount);    
  
        
        
    app.route('/createNewAccount')
        .post(userController.createNewAccount);    

    /*app.route('/updateUser')
        .post(userController.updateUser);*/
}

module.exports = { routeUsers };