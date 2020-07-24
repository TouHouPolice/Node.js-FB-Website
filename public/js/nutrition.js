function displayAddedMeal()
{
    var picture;
    var mealName;
    var addedBox =document.querySelector('#addedBox')
    totalMeals = meal_array.length;
    for(var count=0;count< totalMeals;count++){
        if (currentMealId==meal_array[count]._id){
            picture=meal_array[count].picture;
            mealName=meal_array[count].name;
        }
    }
    if(document.querySelector(".nutriresult")){  var cell = '<div id="'+currentMealId+'" class="addedItem">                                                                                                              \
                                                                                                                          \
                                <img style="height:178px;width:235px;" class="img-fluid img-thumbnail" src=' + picture + ' item=' + currentMealId + ' />                                                                                \                                                       \
                                <img class="removeicon" onclick="deleteAdded(this)" item=' + currentMealId +' src="../images/delete.png"   />                                                                                                                                     \
                        </div> ';     }
             else{
                var cell = '<div id="'+currentMealId+'" class="addedItem">                                                                                                              \
                \
                      <img style="height:178px;width:235px;"   class="img-fluid img-thumbnail" src=' + picture + ' item=' + currentMealId + ' />                                                                                \                                                       \
                  <img class="removeicon" onclick="deleteMealAllergens(this)" item=' + currentMealId +' src="../images/delete.png"   />                                                                                                                                     \
                        </div> ';

             }                                                                                                                                                                                         
                                    

            addedBox.insertAdjacentHTML('beforeend', cell);



}





function displayMealsBrowse() {
    
   
    var table = document.getElementById("mealsTableBox");
    
   
    var totalMeals=0;

    table.innerHTML = "";
    totalMeals = meal_array.length;
    
    for (var count = 0; count < totalMeals; count++) {
         
            var picture = meal_array[count].picture;
            var name = meal_array[count].name;
            var mealId = meal_array[count]._id;
         if(document.querySelector(".nutriresult")){   
            var cell = '<div  class="mealsPic">                                                                                                              \
                            <button  onclick="getNutritionData(this)" data-dismiss="modal" id="Meals"   item=' + mealId + '>                                                                                                \
                                <img width="250px;" height="170px;"  class="img-fluid img-thumbnail" src=' + picture + ' />                                                                                \                                                       \
                            </button>                                                                                                                                            \
                        </div> ';         }  
            else{
               var cell= '<div  class="mealsPic">                                                                                                              \
                            <button  onclick="getAllergensData(this)" data-dismiss="modal" id="Meals"   item=' + mealId + '>                                                                                                \
                                <img width="250px;" height="170px;"  class="img-fluid img-thumbnail" src=' + picture + ' />                                                                                \                                                       \
                            </button>                                                                                                                                            \
                        </div> ';  
            }                                                                                                                                                                                    
                                    

            table.insertAdjacentHTML('beforeend', cell);
           
           
        
    }
}

function selectMeal(){
    
    

    
    energy=energy+nutrition_array[0].meal_energy;
    protein=protein+nutrition_array[0].meal_protein;
    totalFat=totalFat+nutrition_array[0].meal_total_fat;
    saturatedFat=saturatedFat+nutrition_array[0].meal_saturated_fat;
    cholesterol=cholesterol+nutrition_array[0].meal_cholesterol;
    carbohydrates=carbohydrates+nutrition_array[0].meal_carbohydrates;
    dietaryFibres=dietaryFibres+nutrition_array[0].meal_dietary_fibres;
    sodium=sodium+nutrition_array[0].meal_sodium;

    document.getElementById('energy').innerHTML=energy+'kal';
    document.getElementById('protein').innerHTML=protein+'g';
    document.getElementById('totalFat').innerHTML=totalFat+'g';
    document.getElementById('saturatedFat').innerHTML=saturatedFat+'g';
    document.getElementById('cholesterol').innerHTML=cholesterol+'mg';
    document.getElementById('carbohydrates').innerHTML=carbohydrates+'g';
    document.getElementById('dietaryFibres').innerHTML=dietaryFibres+'g';
    document.getElementById('sodium').innerHTML=sodium+'mg';


    console.log(energy)
    

    
}
function selectMealAllergens(){
    egg=allergen_array[0].egg;
    fish=allergen_array[0].fish;
    milk=allergen_array[0].milk;
    peanuts=allergen_array[0].peanuts;
    soy_beans=allergen_array[0].soy_beans;
    tree_nuts=allergen_array[0].tree_nuts;
    wheat=allergen_array[0].wheat;
    gluten=allergen_array[0].gluten;
    MSG=allergen_array[0].MSG;
    sulfite=allergen_array[0].sulfite;
    if(egg==1){
        document.querySelector("#egg").setAttribute("style", "background-color:orange;");
    }
    if(fish==1){
        document.querySelector("#fish").setAttribute("style", "background-color:orange;");
    }
    if(peanuts==1){
        document.querySelector("#peanuts").setAttribute("style", "background-color:orange;");
    }
    if(soy_beans==1){
        document.querySelector("#soy-beans").setAttribute("style", "background-color:orange;");
    }
    if(milk==1){
        document.querySelector("#milk").setAttribute("style", "background-color:orange;");
    }
    if(tree_nuts==1){
        document.querySelector("#tree-nuts").setAttribute("style", "background-color:orange;");
    }
    if(wheat==1){
        document.querySelector("#wheat").setAttribute("style", "background-color:orange;");
    }
    if(gluten==1){
        document.querySelector("#gluten").setAttribute("style", "background-color:orange;");
    }
    if(MSG==1){
        document.querySelector("#MSG").setAttribute("style", "background-color:orange;");
    }
    if(sulfite==1){
        document.querySelector("#sulfite").setAttribute("style", "background-color:orange;");
    }
    
}
function getNutritionData(element){
    console.log("runalready")
    if(totalItem<4){
        totalItem+=1;
    var nutrition = new Object;
    currentMealId = element.getAttribute("item");
    
    
    var request = new XMLHttpRequest();
    
    request.open('POST', nutrition_url+'/'+currentMealId, true);
    request.setRequestHeader("Content-Type", "application/json");


    
//This function will be called when data returns from the web api
    request.onload= function(){
        //get all the movies records into our movie arrary
        nutrition_array=JSON.parse(request.responseText);

        //Fetch the comments as well
        
        console.log(nutrition_array)

        selectMeal()
        displayAddedMeal()
    
        //call the function so as to display all movies titles for "Now Showing"
       
    }
    
    //this command   starts the calling  of the web api
    request.send();}
    else{
        alert("You have selected too many meals!")

    }
    }
    




    function getAllergensData(element){
        if(totalItem<1){
            totalItem+=1;
        var allergens = new Object;
        currentMealId = element.getAttribute("item");
        
        
        var request = new XMLHttpRequest();
        
        request.open('POST', allergen_url+'/'+currentMealId, true);
        request.setRequestHeader("Content-Type", "application/json");
    
    
        
    //This function will be called when data returns from the web api
        request.onload= function(){
            //get all the movies records into our movie arrary
            allergen_array=JSON.parse(request.responseText);
    
            //Fetch the comments as well
            
            console.log(allergen_array)
    
            selectMealAllergens()
            displayAddedMeal()
        
            //call the function so as to display all movies titles for "Now Showing"
           
        }
        
        //this command   starts the calling  of the web api
        request.send();}
        else{
            alert("You have to remove the meal first!")
    
        }
        }

function getMealDataForSearch(){
    var request = new XMLHttpRequest();
    request.open('GET', meal_url, true);


//This function will be called when data returns from the web api
    request.onload= function(){
        //get all the movies records into our movie arrary
        meal_array=JSON.parse(request.responseText);

        //Fetch the comments as well
        
        

    
        //call the function so as to display all movies titles for "Now Showing"
        displayMealsBrowse()
    }
    
    //this command   starts the calling  of the web api
    request.send();
    }


    function deleteAdded(element){
       
            
        
        currentMealId = element.getAttribute("item");
        
        
        var request = new XMLHttpRequest();
        
        request.open('POST', nutrition_url+'/'+currentMealId, true);
        request.setRequestHeader("Content-Type", "application/json");

        request.onload= function(){
           
            nutrition_array=JSON.parse(request.responseText);
    
           
            deleteMeal()
            
            currentItem=document.getElementById(''+currentMealId+'')
            
            currentItem.remove()
            totalItem-=1
    
            
      
           
        }
        
      
        request.send();
    }
function deleteMeal(){
    energy=energy-nutrition_array[0].meal_energy;
    protein=protein-nutrition_array[0].meal_protein;
    totalFat=totalFat-nutrition_array[0].meal_total_fat;
    saturatedFat=saturatedFat-nutrition_array[0].meal_saturated_fat;
    cholesterol=cholesterol-nutrition_array[0].meal_cholesterol;
    carbohydrates=carbohydrates-nutrition_array[0].meal_carbohydrates;
    dietaryFibres=dietaryFibres-nutrition_array[0].meal_dietary_fibres;
    sodium=sodium-nutrition_array[0].meal_sodium;

    document.getElementById('energy').innerHTML=energy+'kal';
    document.getElementById('protein').innerHTML=protein+'g';
    document.getElementById('totalFat').innerHTML=totalFat+'g';
    document.getElementById('saturatedFat').innerHTML=saturatedFat+'g';
    document.getElementById('cholesterol').innerHTML=cholesterol+'mg';
    document.getElementById('carbohydrates').innerHTML=carbohydrates+'g';
    document.getElementById('dietaryFibres').innerHTML=dietaryFibres+'g';
    document.getElementById('sodium').innerHTML=sodium+'mg';
} 

function deleteMealAllergens(element){


  
        document.querySelector("#egg").setAttribute("style", "background-color:white;");
  
   
        document.querySelector("#fish").setAttribute("style", "background-color:white;");
    

        document.querySelector("#peanuts").setAttribute("style", "background-color:white;");


        document.querySelector("#soy-beans").setAttribute("style", "background-color:white;");

        document.querySelector("#milk").setAttribute("style", "background-color:white;");
        document.querySelector("#wheat").setAttribute("style", "background-color:white;");

        document.querySelector("#tree-nuts").setAttribute("style", "background-color:white;");

        document.querySelector("#gluten").setAttribute("style", "background-color:white;");


        document.querySelector("#MSG").setAttribute("style", "background-color:white;");

        document.querySelector("#sulfite").setAttribute("style", "background-color:white;");
         egg=0;
 fish=0;
 milk=0;
 peanuts=0;
 soy_beans=0;
 tree_nuts=0;
 wheat=0;
 gluten=0;
 sulfite=0;
 currentMealId = element.getAttribute("item");
 currentItem=document.getElementById(''+currentMealId+'')
            
            currentItem.remove()
            totalItem-=1
}
        
        