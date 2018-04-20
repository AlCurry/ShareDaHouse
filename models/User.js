// User model
// ==========

// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the userSchema with the schema object
var userSchema = new Schema({

    name: {
        type: String,
        required: true    
    },
    email: {
        type: String,
        required: true
      },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
      }
});

// Create the User model using the noteSchema
var User = mongoose.model("User", userSchema);

// Export the Note model
module.exports = User;
