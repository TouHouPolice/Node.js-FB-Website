"use strict";

var db = require('../db-connection');

class UserDB{
    


    getLoginCredentials(id,callback){
        var sql="SELECT password FROM account WHERE _id = ?";
        db.query(sql,[id],callback);
    }

    authenticateByDB(id, password, callback) {
        var sql = "SELECT _id FROM account WHERE _id = ? AND password = ?";

        db.query(sql, [id, password], callback);
    }

    getAllUsers(callback) {
        var sql = "SELECT * FROM account";

        db.query(sql, callback);
    }
    getUserById(id,callback) {
        var sql = "SELECT * FROM account WHERE _id =?";

        db.query(sql,[id], callback);
    }

    updateAccount(user, callback) {
        var sql = "UPDATE account SET username = ?,password=?,avatar=? WHERE _id = ?";

        db.query(sql, [user.getUserName(),user.getPassword(),user.getAvatar(),user.getUserId()], callback);
    }

    deleteUser(user,callback){
        var sql="DELETE FROM account WHERE _id = ?";
        db.query(sql,[user.getUserId()],callback);
    }

    createNewAccount(user,callback){
        var sql="INSERT INTO account (_id,username,password,dateCreated,avatar) VALUES (?,?,?,?,?)"
        db.query(sql,[user.getUserId(),user.getUserName(),user.getPassword(),user.getDateCreated(),user.getAvatar()],callback)
    }
}

module.exports = UserDB;
