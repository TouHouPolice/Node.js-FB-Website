//var movie_url="https://api.mlab.com/api/1/databases/jobs/collections/movies?apiKey=V0HsJe9lC8Q7naTJK7kS3ZfKnLJdrbQg&s={'availability':1}";
var meal_url="/meals";
var meal_array=[];//This creates an empty movie array
var mealCount=0;
var currentIndex=0;

/*There are two categories:"Now Showing" and "Coming Soon". This variable states
which category of movies should be listed when the home page is first loaded.*/

var remote_comment="https://api.mlab.com/api/1/databases/jobs/collections/comments";


//API key needed by Cloud DB API
var remote_api_key="?apiKey=V0HsJe9lC8Q7naTJK7kS3ZfKnLJdrbQg&s={'datePosted':-1}";

var comment_url="/comments";
var comment_array=[];

var popcornBWImage='images/popcorn_bw.png';
var popcornImage='images/popcorn.png';
var starImage="images/star.png";
var starBWImage="images/star-gray.png";
var rating=0;

var nutrition_array=[];
var nutrition_url="/nutritionInfo";

var allergen_array=[];
var allergen_url="/allergensInfo";
var currentUserName="";
var currentUserId="";
var tempPassword="";

var category_array=[];
var category_url='/categories';

var mealInRange_url='/mealInRange';
var similarMeals_url='/similarMeals';
var mealsByCate_url='/mealsByCate';
//this function is to display a modal
//whenever the user click on "about" link on the nav bar

var energy =0;
var protein=0;
var totalFat=0;
var saturatedFat=0;
var cholesterol=0;
var carbohydrates=0;
var dietaryFibres=0;
var sodium=0;

var currentMealId;

var egg=0;
var fish=0;
var milk=0;
var peanuts=0;
var soy_beans=0;
var tree_nuts=0;
var wheat=0;
var gluten=0;
var sulfite=0;


var totalItem=0;
var user_array=[];
var search_array=[];

var currentMealArray; //FOr menu category


var selectedImg=null;






function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function userDetect(){
    var user=getCookie("username");
    if(user!=""){
        var userId="ID:"+getCookie("userId");
        var avatar=getCookie("avatar");
       
        document.getElementById("login").remove();
        var navBar=document.getElementById("navBar");
        var userArea='<div  class="user">                                          \
                     <div class="avatarBox">                                                          \
          <img width="50px;" height="50px;" src="'+avatar+'">              \
        </div>                                                                          \
        <div class="nameId">                                                          \
          <div class="globalName">                                                       \
            '+user+'                                                      \
          </div>                                                                  \
          <div class="globalId">                                         \
            '+userId+'                                                   \
          </div>                                                          \
        </div>                \
                                                                      \
        <button onclick="log_out()" class="signOut btn btn-primary" >Sign out</button>  \
        <button data-toggle="modal" data-target="#updateAccountModal" class="update btn btn-primary" >Update Account</button>                         \
      </div>' ;    
      
      navBar.insertAdjacentHTML('beforeend',userArea)

    }

}
function delete_cookie( cname ) {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

function log_out(){
    var response=confirm("Are you sure you want to sign out ?");
    if (response==true){
        alert("You have logged out!")
    delete_cookie("username");
    delete_cookie("userId");
    delete_cookie("avatar");
    globalUserName=null;
    globalUserId=null;
    globalAvatar=null;
    window.location.reload();}


}

function selectAvatar(element){
    var all = document.querySelectorAll(".select-avatar");
    console.log(all);
    for (i = 0; i < all.length; i++) {
        all[i].setAttribute('style', "border-color:rgb(255, 255, 255);");
    }
    element.setAttribute('style', "border-color:orange;");
    selectedImg=element.getAttribute('src');

}