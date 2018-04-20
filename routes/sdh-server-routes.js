import express from "express";
//import controller file
import * as sdhController from "../controllers/sdh.server.controller";
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
export default router;
