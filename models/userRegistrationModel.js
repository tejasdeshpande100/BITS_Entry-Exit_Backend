const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    id: {
        type: String,
        trim: true,
        required: true,
        maxLength: 13,
        minLength: 13
      },
    name: {
      type: String,
      trim: true,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('UserRegistration', userSchema, 'registeredUsers');
