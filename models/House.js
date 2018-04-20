// House model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the houseSchema with our schema class
var houseSchema = new Schema({
  // house address - number & 'street' e.g.  "385 Ocean Walk"
  address: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // house name, optional
  name: {
    type: String
  },
  // house picture, optional, "Buffer" is the mongoose data type for images
  pic: {
    type: Buffer
  },
  // general location, in the example of a beach community, this would have a value like "Fire Island","Outer Banks", "DE beaches", or "Bethany Beach"
  region: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number
    //  required: true
  },
  bathrooms: {
    type: Number
    //  required: true
  },
  // Homeowner, or lessor, or "house coordinator"
  //owner: {
   // type: String,
   // required: true
  //},
   _ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User"
   },
  // privacy flag, defaults to true, for now each schema has this flag, it may not be needed in each
  private: {
    type: Boolean,
    default: true
  }
});

// Create the House model using the houseSchema
var House = mongoose.model("House", houseSchema);

// Export the House model
module.exports = House;
