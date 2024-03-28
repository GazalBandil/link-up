const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
      contactNo: {
        type: String,
        required: true,
        unique:true
      },
      
      email: {
        type: String,
        required: true,
        unique: true,
      },
      Name: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
   
     

    
      
    },
    { timestamps: true }
  );
  
  const Usermodel = mongoose.model('User', userSchema);
module.exports = Usermodel;