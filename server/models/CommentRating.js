const { Schema, model } = require('mongoose');

const CommentRatingSchema = new Schema({
    userId: { 
        type: String, 
        required: true 
    },
    commentId: {
         type: String, 
         required: true 
    },
    value: { 
        type: String, 
        required: true 
    },
  });
  
  const CommentRating = model(
    "CommentRating",
    CommentRatingSchema,
    "commentRatings"
  );
  
  module.exports = CommentRating;