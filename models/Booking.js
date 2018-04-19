// Booking model - represent dates a house&room are booked, or occupied by a user
// ==============
// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var roomSchema = new Schema({

  user: {
    type: String,
    required: true
  },
  
 // date range (start-> end) of occupancy for this booking / room / house / user
 startDate: {
  type: Date,
  required: true
  },
endDate: {
      type: Date,
      required: true
  },

  // room address - number & 'street' e.g.  "385 Ocean Walk"
  house: {
    type: String,
    required: true
    // unique: { index: { unique: true } }
  },
  room: {
    type: String
    // unique: { index: { unique: true } }
  },
  // privacy flag, defaults to true, for now each schema has this flag, it may not be needed in each
  private: {
    type: Boolean,
    default: true
  }
});

// Create the room model using the roomSchema
var Booking = mongoose.model("Booking", bookingSchema);

// Export the room model
module.exports = Booking;
