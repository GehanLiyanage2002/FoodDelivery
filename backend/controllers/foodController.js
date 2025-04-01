import foodModel from "../models/foodModel.js";
import fs from "fs";  


const addFood = async (req, res) => {
  try {
    // Ensure file was uploaded
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    // Extract filename
    let image_filename = req.file.filename;

    // Create new food item
    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    // Save to database
    await food.save();
    res.json({ success: true, message: "Food Added" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

// all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }

        // Remove the image file from uploads folder
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.error("Failed to delete image:", err);
            }
        });

        // Delete the food entry from database
        await foodModel.findByIdAndDelete(req.body.id);

        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
};

export { addFood,listFood,removeFood };
