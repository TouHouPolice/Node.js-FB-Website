

function getMealList(){
    var list= document.querySelector('#myUL')
    var request = new XMLHttpRequest();
    request.open('GET', meal_url, true);
    console.log("run1")



    request.onload= function(){
        //get all the movies records into our movie arrary
        search_array=JSON.parse(request.responseText);

        console.log(search_array);
        //Fetch the comments as well
        
        insertMeals();
        list.style.display="none";


    
        //call the function so as to display all movies titles for "Now Showing"
        
    }
    request.send();
}
function insertMeals(){
    console.log('runme')
    
    var list =document.querySelector('#myUL')
    var mealCount = 0;  
    list.innerHTML = ""
    totalMeals = search_array.length;

    for (var count = 0; count < totalMeals; count++) {
         
        
        var name = search_array[count].name;
        var id = search_array[count]._id;
        console.log(id)
        var cell = '<li ><a  item='+id+' onlick="getNutritionData(this)">'+name+'</a></li>';

        list.insertAdjacentHTML('beforeend',cell)
        mealCount++
}

}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        if (input.value.length>0){
            ul.style.display="block";
        }
        else{ul.style.display="none"}
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }}

