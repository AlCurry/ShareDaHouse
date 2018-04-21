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
