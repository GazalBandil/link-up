const express = require("express");
const bodyParser = require("body-parser"); // Import body-parser module
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(bodyParser.json()); // Use body-parser middleware to parse JSON requests
app.use(express.json());
app.use("/user", userRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/miniprojectDb")
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Database not connected"));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
  
