import express from "express";
//import controller file
import * as sdhController from "../controllers/sdh.server.controller";
import bodyParser from 'body-parser';
import Houses from './model/Houses';
// get an instance of express router
const router = express.Router();
router
  .route("/")
  .get(sdhController.getHouses)
  .post(sdhController.addHouse)
  .put(sdhController.updateHouse);
router
  .route("/:id")
  .get(sdhController.getHouse)
  .delete(sdhController.deleteHouse);

  router.route('/homes/:home_id')
  //The put method gives us the chance to update our home based on 
  //the ID passed to the route
   .put(function(req, res) {
   Home.findById(req.params.home_id, function(err, home) {
   if (err)
   res.send(err);
   //setting the new house attriutes to whatever was changed. If 
  //nothing was changed we will not alter the field.
   (req.body.name) ? home.author = req.body.name : null;
   (req.body.address) ? home.text = req.body.address : null;
   (req.body.start) ? home.author = req.body.start : null;
   (req.body.last) ? home.text = req.body.last : null;
   (req.body.region) ? home.author = req.body.region : null;
   (req.body.bedrooms) ? home.text = req.body.bedrooms : null;
   (req.body.bathrooms) ? home.author = req.body.bathrooms : null;
   //save home
   home.save(function(err) {
   if (err)
   res.send(err);
   res.json({ message: 'Home has been updated' });
   });
   });
   })
   //delete method for removing a home from our database
   .delete(function(req, res) {
   //selects the home by its ID, then removes it.
   Home.remove({ _id: req.params.home_id }, function(err, home) {
   if (err)
   res.send(err);
   res.json({ message: 'Home has been deleted' })
   })
   });

router('/', function (req, res) {
  res.json({ message: 'Database Connected!' });
});
//adding the /homes route to our router
router.route('./models/Homes')
  //retrieve homes from db
  .get(function (req, res) {
    //Homes Schema
    Home.find(function (err, houses) {
      if (err)
        res.send(err);
      //responds with a json object of our db homes.
      res.json(homes)
    });
  })
  //post new home to the db
  .post(function (req, res) {
    var home = new Home();
    //body parser for req.body
    home.name = req.body.name;
    home.address = req.body.address;
    home.region = req.body.region;
    home.start = req.body.start;
    home.last = req.body.last;
    home.bedrooms = req.body.bedrooms;
    home.bathrooms = req.body.bathrooms;
    home.save(function (err) {
      if (err)
        res.send(err);
      res.json({ message: 'Home successfully added!' });
    });
  });
export default router;
