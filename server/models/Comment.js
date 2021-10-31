const { Schema, model } = require('mongoose');

const CommentSchema = new Schema(
    {
      userId: { 
        type: String,
        required: true 
    },
      bookId: { 
          type: String, 
          required: true 
    },
      text: { 
        type: String, 
        required: true, 
        minlength: 2, 
        maxlength: 200 
    },
    },
    { timestamps: true }
  );
  
  const Comment = model("Comment", CommentSchema, "comments");
  
  module.exports = Comment;