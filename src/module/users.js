const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      collegeName: {
        type: String,
        required: true,
      },
      contactNo: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
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
      confirmPassword: {
        type: String,
        required: true,
        validate: {
          validator: function(value) {
            return this.password === value;
          },
          message: 'Passwords do not match',
        },
      },
    },
    { timestamps: true } // Correct placement of timestamps option
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;