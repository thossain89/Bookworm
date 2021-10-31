const { Schema, model } = require('mongoose');


const BooksRatingSchema = new Schema({
    userId: { 
        type: String, 
        required: true 
    },
    bookId: { 
        type: String, 
        required: true 
    },
    value: { 
        type: Number, 
        required: true, min: 0.5, max: 5 
    },
  });
  
  const BooksRating = model(
    "BooksRatings",
    BooksRatingSchema,
    "booksRatings"
  );
  
  module.exports = BooksRating;