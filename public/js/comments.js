//import { get } from "https";


function fetchComments()
{
    var request =new XMLHttpRequest();

    request.open('GET',comment_url,true);
    console.log(request)

    //This command starts the calling of the comments web api
    request.onload=function(){
        //get all the comments records into our comments array
        

        comment_array = JSON.parse(request.responseText);
    };

    request.send();
}



//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showMealComments(element) {
    
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    var commentModal = new Modal(document.getElementById("commentModal"));

    document.getElementById("review").textContent = "Review for " + meal_array[item].name;
    document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].meal_name.trim() === meal_array[item].name.trim()){
            document.getElementById("emptyComment").innerHTML = "";
            selectedMealId = meal_array[item].meal_id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>               \
                                    <small>by " + comment_array[i].username + " @ " + comment_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                star += "<img src='images/star.png' style='width:50px' />";
            }
            star += "<img src='images/delete.png' class='edit' item='" + i + "' onClick='deleteComment(this)' />";
            star += "<img src='images/edit.png' class='edit' item='" + i + "' onClick='editComment(this)' />";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
    
}

//This function will hide the existing modal and present a new modal
//whenever the user click on the "New Comment"
function newComment()
{
    var commentModal = new Modal(document.querySelector("#commentModal"));
    var newCommentModal= new Modal(document.querySelector("#newCommentModal"));

    commentModal.hide();  //hide the comment modal window
    newCommentModal.show();//show the new comment modal window

    //Initialise each HTML input elements in the modal window with default value.

    rating=0;
    document.querySelector("#userComments").value="";
    if(getCookie("username")!=""){
        document.querySelector("#nickname").value=''+getCookie("username")+'';

    }
    else{
    document.querySelector("#nickname").value="";}

}

//Submit or send the new comment to the server to be added.
function addComment()
{
    var newCommentModal= new Modal(document.querySelector("#newCommentModal"));
    var messageModal = new Modal(document.querySelector("#messageModal"));
    var comment=new Comment();

    newCommentModal.hide();

    comment.mealId=meal_array[currentIndex]._id; //Movie ID is required by server to create new comment
    comment.meal=meal_array[currentIndex].name;  //movie title is required by server to create new comment
    comment.username=document.querySelector("#nickname").value; //value from HTML input text
    comment.review = document.querySelector("#userComments").value;
    comment.datePosted = null;
    comment.rating=rating;
    if(getCookie("userId")!=""){
        comment.accountId=getCookie("userId");
    }
    else{
        comment.accountId=null;
    }

    var postComment=new XMLHttpRequest(); // new HttpRequest to send comment

    postComment.open("POST",comment_url,true);

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload=function(){
        fetchComments();
        
        var thankyouModal=new Modal(document.getElementById("thankyouModal"));
        thankyouModal.show();
    };
    

    console.log(JSON.stringify(comment));

    postComment.send(JSON.stringify(comment));


}

//This funciton allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element)
{
    var num=element.getAttribute("value");
    var classname=element.getAttribute("class");
    var stars=document.getElementsByClassName(classname);
    var classTarget="."+classname;

    //This is another way of writing 'for' loop , which initialises the 
    //popcorn images to use black and white
    for(let star of stars)
       star.setAttribute("src", starBWImage);
    
    changeStarImage(num,classTarget);   

}

//This function sets the rating and coloured images based on the value of the image tag when
// the mouse cursor hovers over the popcorn image.
function changeStarImage(num,classTarget)
{
    switch(eval(num))
    {
        case 1:
             document.querySelector(classTarget+"[value='1']").setAttribute("src",starImage);
             rating=1;
             break;

        case 2:
             document.querySelector(classTarget+"[value='1']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='2']").setAttribute("src",starImage);
             rating=2;
             break;
             
        case 3:
             document.querySelector(classTarget+"[value='1']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='2']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='3']").setAttribute("src",starImage);
             rating=3;
             break;
             
        case 4:
             document.querySelector(classTarget+"[value='1']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='2']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='3']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='4']").setAttribute("src",starImage);
             rating=4;
             break;
         
        case 5:
             document.querySelector(classTarget+"[value='1']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='2']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='3']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='4']").setAttribute("src",starImage);
             document.querySelector(classTarget+"[value='5']").setAttribute("src",starImage);
             rating=5;
             break;     
    }
}

function editComment(element)
{
    var item=element.getAttribute("item");
    var commentModal=new Modal(document.getElementById("commentModal"));
    var editCommentModal= new Modal(document.getElementById("editCommentModal"));

    currentIndex = item;
    commentModal.hide();
    editCommentModal.show();

    document.getElementById("editnickname").value=comment_array[item].username;
    document.querySelector("#edituserComments").value=comment_array[item].review;
    //console.log(comment_array[item].rating);
    displayColorStar('editpop',comment_array[item].rating);
}

function displayColorStar(classname, num)
{
    var pop=document.getElementsByClassName("classname");
    var classTarget="."+classname;
    for(let p of pop)
    {
        p.setAttribute("src",starBWImage);
    
    }
    changeStarImage(num, classTarget);
}

function updateComment()
{
    var response=confirm("Are you sure you want to update this comment ?");

    if(response==true)
    {
       var commentModal=new Modal(document.querySelector("#editCommentModal"));
       //var edit_comment_url=remote_comment+"/"+comment_array[currentIndex]._id.$oid+remote_api_key;
       var edit_comment_url='/comments/'+comment_array[currentIndex]._id;
       var updateComment = new XMLHttpRequest();
       
       commentModal.hide();
       updateComment.open("PUT", edit_comment_url, true);
       updateComment.setRequestHeader("Content-type","application/json");
       comment_array[currentIndex].username=document.getElementById("editnickname").value;
       comment_array[currentIndex].review=document.getElementById("edituserComments").value;
       comment_array[currentIndex].rating=rating;
       updateComment.onload=function(){
           fetchComments();
           var thankyouModal= new Modal(document.querySelector("#thankyouModal"));
           thankyouModal.show();
       };
       console.log(JSON.stringify(comment_array[currentIndex]))
       updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
}

function deleteComment(element)
{
    var response=confirm("Are you sure you want to delete this comment ?");

    if(response==true)
    {
        var commentModal=new Modal(document.getElementById("commentModal"));
        var item=element.getAttribute("item");
        var delete_comment_url="/comments/"+comment_array[item]._id;
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


