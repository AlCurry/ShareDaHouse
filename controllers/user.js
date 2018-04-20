// Controller for User
// ============================
var db = require("../models");

module.exports = {

  // Find one User
  // invoke from routes/api/...js :
  // var houseController = require("../../controllers/house");
  // router.post("/:id",houseController.find); 
  // CORRECT _id ARGUMENT ?
    find: function(req, res) {
      db.User.find({ _id: req.params.id }).then(function(dbUser) {
        res.json(dbUser);
      });
  },
  
  // Create a new User
  // invoke from routes/api/...js :
  // var userController = require("../../controllers/user");
  // router.post("/",userController.create); 
    create: function(req, res) {
      db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
},
    
  // Find all Users, send them back to the user
  // DO WE NEED THIS findAll ?   
  findAll: function(req, res) {
    db.House
      .find(req.query)
      .then(function(dbUser) {
        res.json(dbUser);
      });
  },
  // Delete the specified User
  delete: function(req, res) {
    db.User.remove({ _id: req.params.id }).then(function(dbUser) {
      res.json(dbUser);
    });
  },
  // Update the specified User
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbUser) {
      res.json(dbUser);
    });
  }
};
