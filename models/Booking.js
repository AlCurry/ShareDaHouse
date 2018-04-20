// Booking model - represent dates a house&room are booked, or occupied by a user
// ==============
// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var bookingSchema = new Schema({

  // user id - line to User Schema
  _userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
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

  // house id - line to House Schema
  _houseId: {
    type: Schema.Types.ObjectId,
    ref: "House"
  },

  // room id - line to Room Schema
  _roomId: {
    type: Schema.Types.ObjectId,
    ref: "Room"
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
