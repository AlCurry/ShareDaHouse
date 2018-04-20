import mongoose from "mongoose";
//import models
import House from "../models/sdh.server.model.js";
export const getHouses = (req, res) => {
  House.find().exec((err, Houses) => {
    if (err) {
      return res.json({ success: false, message: "Some Error" });
    }
    return res.json({
      success: true,
      message: "Houses fetched successfully",
      Houses
    });
  });
};
export const addHouse = (req, res) => {
  const newHouse = new House(req.body);
  newHouse.save((err, House) => {
    if (err) {
      return res.json({ success: false, message: "Some Error" });
    }
    return res.json({
      success: true,
      message: "House added successfully",
      House
    });
  });
};
export const updateHouse = (req, res) => {
  House.findOneAndUpdate(
    { _id: req.body.id },
    req.body,
    { new: true },
    (err, House) => {
      if (err) {
        return res.json({ success: false, message: "Some Error", error: err });
      }
      console.log(House);
      return res.json({
        success: true,
        message: "Updated successfully",
        House
      });
    }
  );
};
export const getHouse = (req, res) => {
  House.find({ _id: req.params.id }).exec((err, House) => {
    if (err) {
      return res.json({ success: false, message: "Some Error" });
    }
    if (House.length) {
      return res.json({
        success: true,
        message: "House fetched by id successfully",
        House
      });
    } else {
      return res.json({
        success: false,
        message: "House with the given id not found"
      });
    }
  });
};
export const deleteHouse = (req, res) => {
  House.findByIdAndRemove(req.params.id, (err, House) => {
    if (err) {
      return res.json({ success: false, message: "Some Error" });
    }
    return res.json({
      success: true,
      message: House.HouseText + " deleted successfully"
    });
  });
};
