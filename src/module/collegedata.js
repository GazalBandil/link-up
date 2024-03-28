const mongoose = require("mongoose");

// Schema for colleges
const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  // Other details about the college
}, { timestamps: true });

// Schema for groups
const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['official', 'unofficial'],
    default: 'unofficial'
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College',
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  // Other details about the group
}, { timestamps: true });

const College = mongoose.model('College', collegeSchema);
const Group = mongoose.model('Group', groupSchema);

module.exports = { College, Group };
