class Comment{
    constructor(id,mealId,accountId,meal,username,review,rating,datePosted)
    {
        this.id=id;
        this.mealId=mealId;
        this.accountId=accountId;
        this.meal=meal;
        this.username=username;
        this.review=review;
        this.rating=rating;
        this.datePosted=datePosted;
    }
    
    
    getId()
    {
        return this.id;
    }
    getMealId()
    {
        return this.mealId;

    }
    getAccountId(){
        return this.accountId;
    }
    getMeal()
    {
        return this.meal;
    }
    getUsername()
    {
        return this.username;
    }
    getReview()
    {
        return this.review;
    }
    getRating()
    {
        return this.rating;
    }
    getDatePosted()
    {
        return this.datePosted
    }
}

module.exports=Comment;