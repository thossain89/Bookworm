const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    category: { type: String, 
        required: true 
    },
  });
  
  const Category = model("Category", BookSchema, "categories");
  
  module.exports = Category;