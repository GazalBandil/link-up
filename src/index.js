const express=require("express");
const app=express();
const userRouter = require("./routes/users");
const Mainrouter = require("./routes/note");
const mongoose = require("mongoose");
const port = 3000;
app.use(express.json());
app.use("/user",userRouter);
app.use("/Home",Mainrouter);
mongoose
  .connect("mongodb://127.0.0.1:27017/miniprojectDb")
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Database not connected"));







app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  
