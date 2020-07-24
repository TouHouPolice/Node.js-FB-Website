"use strict";

const CommentsDB = require('../models/CommentsDB');
const Comment=require('../models/Comment');

 
var commentsDB = new CommentsDB();

function getAllComments(request,respond)
{
    commentsDB.getAllComments(function(error,result)
    {
        if(error){
          respond.json(error);
      } else{
          respond.json(result);
      }
    });
}



function addComment(request,respond){
    var now=new Date();
    var comment = new Comment(null,request.body.mealId,request.body.accountId,request.body.meal,request.body.review,request.body.username,request.body.rating,now.toString());

    
    commentsDB.addComment(comment,function(error,result){
        if(error){
            respond.json(error);
        } else{
            respond.json(result);
        }

    });
}

function updateComment(request,respond)
{
    var now =new Date();
    var comment = new Comment(parseInt(request.params.id),request.body.mealId,null,request.body.meal,request.body.username,request.body.review,request.body.rating,now.toString());
    commentsDB.updateComment(comment,function(error,result)
    {
        if(error){
            respond.json(error);
        }else{
            respond.json(result);
        }

    });
}

function deleteComment(request,respond)
{
    var comment=new Comment(parseInt(request.params.id),null,null,null,null,null,null)
    commentsDB.deleteComment(comment,function(error,result){
        if(error){
            
            respond.json(error);
        }else{
            respond.json(result);
        }
    });
}


module.exports ={getAllComments,addComment,updateComment,deleteComment};