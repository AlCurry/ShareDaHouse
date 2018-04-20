// Controller for Room collection
// ========================
var db = require("../models");

module.exports = {
  // Find one Room
  find: function(req, res) {
    db.Room.find({ _Id: req.params.id }).then(function(dbRoom) {
      res.json(dbRoom);
    });
  },

  // Create a new Room
  // invoke from routes/api/...js :
  // var roomController = require("../../controllers/room");
  // router.post("/",roomController.create); 
  create: function(req, res) {
    db.Room.create(req.body).then(function(dbRoom) {
      res.json(dbRoom);
    });
  },
  // Delete a Room with a given id
  delete: function(req, res) {
    db.Room.remove({ _id: req.params.id }).then(function(dbRoom) {
      res.json(dbRoom);
    });
  }
};
