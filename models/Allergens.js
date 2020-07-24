"use strict";

class Allergens {
    constructor(id,mealId, egg,fish,milk,peanuts,cholesterol,soyBeans,treeNuts,wheat,gluten,MSG,sulfite) {
        this.id = id;
        this.mealId = mealId;
        this.egg = egg;
        this.fish = fish;
        this.milk = milk;
        this.peanuts = peanuts;
        this.cholesterol = cholesterol;
        this.soyBeans = soyBeans;
        this.treeNuts = treeNuts;
        this.wheat = wheat;
        this.gluten = gluten;
        this.MSG = MSG;
        this.sulfite = sulfite;
    }

    getId() {
        return this.id;
    }

    getMealId() {
        return this.mealId;
    }

   
    getEgg() {
        return this.egg;
    }
    getFish() {
        return this.fish;
    }
    getMilk() {
        return this.milk;
    }
    getPeanuts() {
        return this.peanuts;
    }
    getCholesterol() {
        return this.cholesterol;
    }
    getSoyBeans() {
        return this.soyBeans;
    }
    getTreeNuts() {
        return this.treeNuts;
    }
    getWheat() {
        return this.wheat;
    }
    getWGluten() {
        return this.gluten;
    }
    getMSG() {
        return this.MSG;
    }
    getSulfite() {
        return this.sulfite;
    }
}

module.exports = Allergens;