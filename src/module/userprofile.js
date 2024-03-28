const mongoose = require("mongoose");

// Schema for user profiles
const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collegeIDProof: {
    type: String  // Assuming you'll store the path or URL of the image
  },
  collegeName: {
    type: String
  },
  stream: {
    type: String
  },
  currentSchool: {
    name: {
      type: String,
      required: function() {
        // Require name if the user is in high school
        return this.level === 'high school';
      }
    },
    level: {
      type: String,
      enum: ['high school', 'college'],
      required: true
    }
  },
  // Other profile details you might need
}, { timestamps: true });

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
