
function getMealData(){
    var request = new XMLHttpRequest();
    request.open('GET', meal_url, true);


//This function will be called when data returns from the web api
    request.onload= function(){
        //get all the movies records into our movie arrary
        meal_array=JSON.parse(request.responseText);

        //Fetch the comments as well
        
        

        console.log(meal_array)
    
        //call the function so as to display all movies titles for "Now Showing"
        displayMeals();
    }
    
    //this command   starts the calling  of the web api
    request.send();
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
            
    


// Get the modal



//that filters based on "Now Showing" or "Coming Soon"
function displayMeals() {
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

    message = mealCount + " Meals " 
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function showMealDetails(element)
{
    var item = element.getAttribute("item");
    var infoModal=new Modal(document.getElementById("infoModal"));

    currentIndex=item;
    document.querySelector("#mealName").textContent=meal_array[item].name;
    document.querySelector("#mealPicture").src=meal_array[item].picture;
    document.querySelector("#price").textContent="$"+meal_array[item].price;
    
    
  
    document.querySelector("#introduction").textContent=meal_array[item].introduction;
   
    
}

var response = "";

function login() {
    // Create a new object to contain the data in the loginForm.
    // We assign the new object to a variable called "credentials".
    
    var credentials = new Object();

    var ID=document.getElementById("id").value;
    var password=document.getElementById("password").value;
    if(ID=="" || password ==""){
        alert("ID and password can not be null!")
    }
    else{
    credentials.id = ID;
    credentials.password = password;

    var request = new XMLHttpRequest();

    request.open("POST", "/login", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
    response = JSON.parse(request.responseText);
    if(response.message=="Success"){
        getUserInfoById(ID)
        alert("Login Successful! Click on OK to proceed! ")
        
        window.location.reload();
            //your code to be executed after 1 second
          
        
        
    }    
    else{
        alert("ID or password incorrect!")
    }
        
        
    };

    request.send(JSON.stringify(credentials));}
}

function getUserInfoById(ID){
    var request = new XMLHttpRequest();
    var user =new Object;
    user.id=ID;
    request.open('POST', "/userInfo", true);

    
    request.setRequestHeader("Content-Type", "application/json");

//This function will be called when data returns from the web api
    request.onload= function(){
        //get all the movies records into our movie arrary
        user_array=JSON.parse(request.responseText);

        console.log(user_array);
        userId=user_array[0]._id;
        username=user_array[0].username;
        userPassword = user_array[0].password;
        userAvatar=user_array[0].avatar;

        setCookie("userId",userId,1);
        setCookie("username",username,1);
        
        setCookie("avatar",userAvatar,1);

       
        //Fetch the comments as well
        
        

    
        //call the function so as to display all movies titles for "Now Showing"
        
    }
    
    //this command   starts the calling  of the web api
    request.send(JSON.stringify(user));

    }




/*function deleteAccount(userId)
{
    var response=confirm("Are you sure you want to delete this account ?");

    if(response==true)
    {
       
        var item=element.getAttribute("item");
        var delete_user_url="/user/"+userId;
        var eraseComment=new XMLHttpRequest();

        commentModal.hide();
        eraseComment.open("DELETE",delete_comment_url,true);
        eraseComment.onload=function(){
            fetchComments();
            var thankyouModal=new Modal(document.getElementById("thankyouModal"));
            thankyouModal.show();
        };
        eraseComment.send();
    }
}
*/


function register(){
    var identity = new Object;
    var ID = document.getElementById('ID').value
    var username=document.getElementById('username').value
    var password1=document.getElementById('password1').value
    var password2=document.getElementById('password2').value
    if (ID==""||username==""||password1==""||password2==""){
        alert("You must fill all the fields")
    }
    else if(password1!=password2){
        alert("Password confirmation fails")
    }
    else{
    identity.id = ID;
    identity.username = username;
    identity.password=password1;
    if(selectedImg==null||selectedImg==""){
        identity.avatar="/images/avatar/default.png"
    }
    else{identity.avatar=selectedImg;}
    

    var request = new XMLHttpRequest();

    request.open("POST", "/createNewAccount", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
        response = JSON.parse(request.responseText);
        document.getElementById("registerModal").style.display = "none";
        
       
    };

    request.send(JSON.stringify(identity));
    alert("Successful!")
    window.location.reload();}
   
}


function updateAccount(){
    var identity = new Object;
    var ID = getCookie("userId");
    var username=document.getElementById('newUsername').value
    var password1=document.getElementById('newPassword1').value
    var password2=document.getElementById('newPassword2').value
    if (username==""||password1==""||password2==""){
        alert("You must fill all the fields")
    }
    else if(password1!=password2){
        alert("Password confirmation fails")
    }
    else{
    identity.id=ID;
    identity.username = username;
    identity.password=password1;
    if(selectedImg==null||selectedImg==""){
        identity.avatar="/images/avatar/default.png"
    }
    else{identity.avatar=selectedImg;}

    var request = new XMLHttpRequest();

    request.open("PUT", "/update", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
        response = JSON.parse(request.responseText);
        document.getElementById("edit-account-modal").style.display = "none";
        
       
    };

    request.send(JSON.stringify(identity));
    alert("Successful!")
    delete_cookie("username");
    delete_cookie("userId");
    delete_cookie("avatar");
    window.location.reload();}
   
}




