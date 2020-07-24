"use strict";

class Nutrition {
    constructor(id,mealId, energy,protein,totalFat,saturatedFat,cholesterol,carbohydrates,dietaryFibres,sodium) {
        this.id = id;
        this.mealId = mealId;
        this.energy = energy;
        this.protein = protein;
        this.totalFat = totalFat;
        this.saturatedFat = saturatedFat;
        this.cholesterol = cholesterol;
        this.carbohydrates = carbohydrates;
        this.dietaryFibres = dietaryFibres;
        this.sodium = sodium;
    }

    getId() {
        return this.id;
    }

    getMealId() {
        return this.mealId;
    }

   
    getEnergy() {
        return this.energy;
    }
    getProtein() {
        return this.protein;
    }
    getTotalFat() {
        return this.totalFat;
    }
    getSaturatedFat() {
        return this.saturatedFat;
    }
    getCholesterol() {
        return this.cholesterol;
    }
    getCarbohydrates() {
        return this.carbohydrates;
    }
    getDietaryFibres() {
        return this.dietaryFibres;
    }
    getSodium() {
        return this.sodium;
    }
}

module.exports = Nutrition;