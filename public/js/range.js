function getMealInRange(){
    var request = new XMLHttpRequest();
    var range=new Object;
    range.low=document.getElementById("low").value;
    range.high=document.getElementById("high").value;
    request.open('POST', 'mealsInRange', true);
    request.setRequestHeader("Content-Type", "application/json");

//This function will be called when data returns from the web api
    request.onload= function(){
        //get all the movies records into our movie arrary
        meal_array=JSON.parse(request.responseText);

        //Fetch the comments as well
        
        

    
        //call the function so as to display all movies titles for "Now Showing"
        displayMealsRange();
        fetchComments();
    }
    
    //this command   starts the calling  of the web api
    request.send(JSON.stringify(range));
    }

    function displayMealsRange() {
        var table = document.getElementById("mealsTable");
        var mealCount = 0;
        var message = "";
    
        table.innerHTML = "";
        totalMeals = meal_array.length;
    
        for (var count = 0; count < totalMeals; count++) {
             
                var picture = meal_array[count].picture;
                var name = meal_array[count].name;
    
                var cell = '<div class="col-md-3  " style="float: none; margin: 0 auto;">                                                                                                                                                                                                   \
                                <div class="flip-container "  >                                                                                                                                                                                       \
                                    <div class="flipper">                                                                                                                                                                                           \
                                        <div class="front">                                                                                                                                                                                         \
                                            <a id="Meals"  href="#" data-toggle="modal" data-target="#info-Modal" item=' + count + '>                                                                                                \
                                                <img width="200px;" height="170px;" class="img-fluid img-thumbnail" src=' + picture + ' />                                                                                                                                       \
                                            </a>                                                                                                                                                                                                    \
                                        </div>                                                                                                                                                                                                      \
                                        <div class="back">                                                                                                                                                                                          \
                                            <div class="bg-dark mystyle text-center py-3" >                                                                                                                                                         \
                                                <span>' + name + '</span><br>                                                                                                                                                                      \
                                                <button href="#" data-toggle="modal" data-target="#infoModal" item="' + count + '" type="button" class="comments btn btn-primary btn-sm" onClick="showMealDetails(this)" >See More</button>       \
                                                <button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="comments btn btn-primary btn-sm" onClick="showMealComments(this)" >Comments</button>    \
                                            </div>                                                                                                                                                                                                  \
                                        </div>                                                                                                                                                                                                      \
                                    </div>                                                                                                                                                                                                          \
                                </div>                                                                                                                                                                                                              \
                            </div>';
    
                table.insertAdjacentHTML('beforeend', cell);
                mealCount++;
            
        }
    }