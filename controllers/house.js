// Controller for House
// ============================
var db = require("../models");

module.exports = {

  // Find one house
  // invoke from routes/api/...js :
  // var houseController = require("../../controllers/house");
  // router.post("/:id",houseController.find); 
  // CORRECT _id ARGUMENT ?
    find: function(req, res) {
      db.House.find({ _id: req.params.id }).then(function(dbHouse) {
        res.json(dbHouse);
      });
  },
  
  // Create a new House
  // invoke from routes/api/...js :
  // var houseController = require("../../controllers/house");
  // router.post("/",houseController.create); 
    create: function(req, res) {
      db.House.create(req.body).then(function(dbHouse) {
        res.json(dbNote);
      });
},
    
  // Find all houses, send them back to the user
  // DO WE NEED THIS findAll ?   
  findAll: function(req, res) {
    db.House
      .find(req.query)
      .then(function(dbHouse) {
        res.json(dbHouse);
      });
  },
  // Delete the specified house
  delete: function(req, res) {
    db.House.remove({ _id: req.params.id }).then(function(dbHouse) {
      res.json(dbHouse);
    });
  },
  // Update the specified house
  update: function(req, res) {
    db.House.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbHouse) {
      res.json(dbHouse);
    });
  }
};
