var db= require ('../db-connection');

class CommentsDB{
    
    
    getAllComments(callback)
    {
        var sql="SELECT * FROM comment";

        db.query(sql,callback);
        
    }

    addComment(comment,callback)
    {
        var sql = "INSERT INTO comment (meal_id,meal_name,account_id,review,username,rating,datePosted) VALUES (?,?,?,?,?,?,?)";
       
        
        db.query(sql,[comment.getMealId(),comment.getMeal(),comment.getAccountId(),comment.getReview(),comment.getUsername(),comment.getRating(),comment.getDatePosted()],callback);


    }

    updateComment(comment,callback)
    {
        var sql="UPDATE comment SET review=?,username=?,rating=?,datePosted=? WHERE _id = ?";
        return db.query(sql, [comment.getReview(),comment.getUsername(),comment.getRating(),comment.getDatePosted(),comment.getId()],callback);
    }
    deleteComment(comment,callback)
    {
        var sql="DELETE FROM comment WHERE _id = ?";
        db.query(sql,[comment.getId()],callback)
    }
}



module.exports=CommentsDB;