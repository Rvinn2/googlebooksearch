var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var BooksSchema = new Schema({
 
  title: {
    type: String,
    required: true
  },
  
  link: {
    type: String,
    required: true
  },

  Authors: {
    type: String,
    required: true
  },

  Description: {
    type: String,
    required: true
  },

  Image: {
    type: String,
    required: true,
    default: "https://images.app.goo.gl/FrFFpk4LNayEzuqk8"
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
//   note: {
//     type: Schema.Types.ObjectId,
//     ref: "Note"
//   }
});

// This creates our model from the above schema, using mongoose's model method
var Books = mongoose.model("Books", BooksSchema);

// Export the Article model
module.exports = Books;

