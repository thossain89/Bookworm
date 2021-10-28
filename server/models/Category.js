const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    category: { 
        type: String, 
        required: true ,
        trim: true
    },
  });
  
  const Category = model("Category", BookSchema, "categories");
  
  module.exports = Category;