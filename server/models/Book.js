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
      type: String,
      required: true,
      
    },
    year: {
      type: String,
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
    reviews:[
      {
        review:{
          type:String,
          required:false,
          minlength:5,
          maxlength:280,
        },        
        author:{
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true 
        }, 
        rating: {
            type: Number,
            min: 0,
            max: 5,
        } ,      
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
