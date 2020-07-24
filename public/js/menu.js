

function fetchMealByCategory(element)
{
    var categoryInfo = new Object;
    categoryInfo.category=element.getAttribute("item");
    var request = new XMLHttpRequest();
    
    request.open('POST', mealsByCate_url, true);
    request.setRequestHeader("Content-Type", "application/json");
    

    console.log(categoryInfo.category);


    request.onload= function(){
       
        category_array=JSON.parse(request.responseText);
        

        console.log(category_array)
        //Fetch the comments as well
        
        
        displayMealsByCate();
        

    
        //call the function so as to display all movies titles for "Now Showing"
        
    }
    
    //this command   starts the calling  of the web api
    request.send(JSON.stringify(categoryInfo));

}
/*function matchMealsByCategory()
{
    currentMealArray=[];
    
    for (var current=0;current<category_array.length;current++){
        for (var count=0;count<meal_array.length;count++){
            if(category_array[current].meal_id==meal_array[count]._id){
                var meal=new Meal;
                console.log("it works")
                console.log(meal_array)
               meal.id=meal_array[count]._id;
                meal.name=meal_array[count].name;
                meal.introduction=meal_array[count].introduction;
                meal.price=meal_array[count].price;
                meal.picture=meal_array[count].picture;
                console.log(meal)
                
                currentMealArray[current]=
                {"id":''+meal_array[count]._id+' ', "name":''+meal_array[count].name+' ', "introduction":''+meal_array[count].introduction+' ',"price":''+meal_array[count].price+' ',"picture":''+meal_array[count].picture+' '};
               
            }
        }
    }
    console.log(category_array)
    console.log("currentMealArray"+currentMealArray)
}*/


function displayMealsByCate() {
    var table = document.getElementById("mealsTable");
    var mealCount = 0;
    var message = "";

    table.innerHTML = "";
    totalMeals =meal_array.length;
    

    for (var current=0;current<category_array.length;current++){
        for (var count=0;count<meal_array.length;count++){
            if(category_array[current].meal_id==meal_array[count]._id){
         
            var currentId=meal_array[count]._id-1;
            var picture = meal_array[count].picture;
            var name = meal_array[count].name;
            console.log("currentId is"+currentId)

            var cell = '<div class="col-md-3  " style="float: none; margin: 0 auto;">                                                                                                                                                                                                   \
                            <div class="flip-container "  >                                                                                                                                                                                       \
                                <div class="flipper">                                                                                                                                                                                           \
                                    <div class="front">                                                                                                                                                                                         \
                                        <a id="Meals"  href="#" data-toggle="modal" data-target="#infoModal" item=' + currentId + '>                                                                                                \
                                            <img width="200px;" height="170px;" class="img-fluid img-thumbnail" src=' + picture + ' />                                                                                                                                       \
                                        </a>                                                                                                                                                                                                    \
                                    </div>                                                                                                                                                                                                      \
                                    <div class="back">                                                                                                                                                                                          \
                                        <div class="bg-dark mystyle text-center py-3" >                                                                                                                                                         \
                                            <span>' + name + '</span><br>                                                                                                                                                                      \
                                            <button href="#" data-toggle="modal" data-target="#infoModal" item="' + currentId + '" type="button" class="comments btn btn-primary btn-sm" onClick="showMealDetails(this)" >See More</button>       \
                                            <button href="#" data-toggle="modal" data-target="#commentModal" item="' + currentId + '" type="button" class="comments btn btn-primary btn-sm" onClick="showMealComments(this)" >Comments</button>    \
                                        </div>                                                                                                                                                                                                  \
                                    </div>                                                                                                                                                                                                      \
                                </div>                                                                                                                                                                                                          \
                            </div>                                                                                                                                                                                                              \
                        </div>';

            table.insertAdjacentHTML('beforeend', cell);
            mealCount++;
        
            
    }

    message = mealCount + " Meals " ;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
    
}




}
}




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

function labelChange(element){
    currentText=element.innerHTML;
    document.querySelector("#dropdownMenuButton1").innerHTML=currentText;
}