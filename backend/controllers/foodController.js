import fs from "fs";
import foodModel from "../models/foodModel.js";

// Create a new food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Item added successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// all the foods list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find();
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Item removed successfully" });

  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export { addFood, listFood, removeFood };
