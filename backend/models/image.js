const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
    title: { type: String },
    url: { type: String },
    description: { type: String },
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    views:{type:Number}
});

module.exports = mongoose.model("Image", imgSchema);
