"use strict";

class User {
    constructor(id,username, password,avatar,dateCreated) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.dateCreated=dateCreated;
        this.avatar=avatar;
    }

    getUserId() {
        return this.id;
    }

    getUserName() {
        return this.username;
    }

   
    getPassword() {
        return this.password;
    }
    getDateCreated(){
        return this.dateCreated;
    }
    getAvatar(){
        return this.avatar;
    }
    
}

module.exports = User;