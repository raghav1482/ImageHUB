const router = require("express").Router();
const Image = require("../models/image");
const cloudinary = require('cloudinary').v2;
require('dotenv').config()

// Load Cloudinary configuration from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

router.post("/upload", async (req, res) => {
    try {
        const {data,author,title,description} = req.body;
    if (!data) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    await cloudinary.uploader.upload(data, {
      upload_preset: 'image_hub'
    }).then(async(result)=>{
        const imagedat = { url: `${result.public_id}.${result.format}`,author,title,description,views:1}
        const newimg = await new Image(imagedat);
        newimg.save().then((result)=>{res.send(result)});
}
);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/getimages",async(req,res)=>{
  
  try{
    const images = await Image.find({});
    res.send(images);
  }catch(e){res.status(400).json({msg:"Error fetching images"})}
})

router.post("/updateview", async (req, res) => {
  const { id } = req.body;
  try {
    const image = await Image.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true } // This option ensures that the returned document is the updated one
    );

    if (!image) {
      return res.status(404).json({ msg: "Image not found" });
    }

    res.status(200).json({ msg: "View count updated", image });
  } catch (e) {
    res.status(400).json({ msg: "Error updating view count", error: e.message });
  }
});

module.exports = router;
