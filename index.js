const express = require("express");
const { type } = require("os");
const userrouter = require("./routes/user");
const app = express();
const connectMongodb = require("./connection");
const PORT = 8000;
connectMongodb();
app.use(express.urlencoded({ extende: false }));
app.use("/user", userrouter);
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
