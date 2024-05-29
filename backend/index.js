const express = require("express");
const app = express();
const auth = require("./routes/auth");
const cors = require("cors")
const mongoose=require("mongoose");
require('dotenv').config()

const imageroute = require("./routes/image");
app.use(cors());

app.use(express.json({
    limit: '50mb'
  }));

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (e) {
        console.error("DB Connection Error:", e);
        process.exit(1); // Exit process with failure
    }
};

connectDB();
app.get("/", (req, res) => {
    res.send("HELLO");
});

app.use("/auth",auth);
app.use("/image",imageroute);

app.listen(process.env.PORT, () => {
    console.log("Server Running at PORT 8000");
});
