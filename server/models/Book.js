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
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
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
      required: true
      
    },    
    image: {
        type:String 
    },
    rating: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Book = model('Book', BookSchema, 'books');

module.exports = Book;
