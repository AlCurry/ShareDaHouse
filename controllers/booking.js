// Controller for Booking
// ============================
var db = require("../models");

// FIND ALL FOR A HOUSE ?
// FIND ALL FOR A USER ?

// CREATE A NEW BOOKING 

module.exports = {
// Find all bookings, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Booking
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbBooking) {
        res.json(dbBooking);
      });
    },

// CREATE A NEW BOOKING 
  // HOW ARE LINKS BACK TO HOUSE AND ROOM POPULATED
  // (WILL THE IDs come in with the POST?  Do we do a POST with React?)  
    create: function (req, res) {
        db.Booking.create(req.body).then(function (dbBooking) {
            res.json(dbBooking);
        });
    },    
  // Delete the specified headline
  delete: function(req, res) {
    db.Booking.remove({ _id: req.params.id }).then(function(dbBooking) {
      res.json(dbBooking);
    });
  },
  // Update the specified booking
  update: function(req, res) {
    db.Booking.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbBooking) {
      res.json(dbBooking);
    });
  }
};
