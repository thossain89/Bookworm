const { Schema, model } = require('mongoose');

const MarkerSchema = new Schema({
    userId: { 
        type: String, 
        required: true 
    },
    bookId: {
         type: String, 
         required: true 
    },
  });
  
  const Marker = model("Marker", MarkerSchema, "markers");
  
  module.exports = Marker;