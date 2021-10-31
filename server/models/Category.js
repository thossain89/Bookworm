const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    name: { 
        type: String, 
        required: true ,
        trim: true
    },
  });
  
  const Category = model("Category", CategorySchema, "categories");
  
  module.exports = Category;