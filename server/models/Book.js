const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
  {
    
    name: { 
        type: String,
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    category: {      
      type: String,
      required: false
    },
    description: {   
        type: String,
    },
    pages: {
      type: Number,
      required: true,
      min: 10,
    },
    year: {
      type: Number,
      required: true,
    },
    addedBy: {       
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false      
    },    
    image: {
        type:String 
    },
    review:[
      {
        reviewText:{
          type:String,
          required:false,
          minlength:5,
          maxlength:280,
        },
        reviewAuthor:{
          type:String,
          required: false,
        },        
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
      }
    ], 
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Book = model('Book', BookSchema, 'books');

module.exports = Book;
