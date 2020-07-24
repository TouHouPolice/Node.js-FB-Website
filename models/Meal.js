class Meal{
    constructor(id,name,introduction,price,picture)
    {
        this.id=id;
        this.name=name;
        this.introduction=introduction;
        this.price=price;
        this.picture=picture;
        
    }
    
    
    getId()
    {
        return this.id;
    }
    getName()
    {
        return this.name;

    }
    getIntroduction()
    {
        return this.introduction;
    }
    getPrice()
    {
        return this.price;
    }
    getPicture()
    {
        return this.picture;
    }
    
}

module.exports=Meal;