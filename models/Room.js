// Room model - a house has multiple rooms, referring to bedrooms
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var roomSchema = new Schema({
  // house address - number & 'street' e.g.  "385 Ocean Walk"
  house: {
    type: String
    // unique: { index: { unique: true } }
  },
  // Homeowner, or lessor, or "house coordinator"
  owner: {
    type: String,
    required: true
  },
  // "queen", "king", "two twins" would be typical values
  bed: {
    type: String,
    required: true
  },
  // "private" or "shared" would be typical values
  bath: {
    type: String
    //  required: true
  },
  // maximum number of people this room can accommodate
  maxOccupancy: {
    type: Number
    //  required: true
  },
  // privacy flag, defaults to true, for now each schema has this flag, it may not be needed in each
  private: {
    type: Boolean,
    default: true
  }
});

// Create the room model using the roomSchema
var Room = mongoose.model("Room", roomSchema);

// Export the room model
module.exports = Room;
