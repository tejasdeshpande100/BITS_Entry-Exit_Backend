const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    id: {
        type: String,
        trim: true,
        required: true,
      },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    contact_no: {
        type: String,
        trim: true,
        required: true,
    },
    vehicle_no: {
        type: String,
        trim: true,
    },
    destination: {
        type: String,
        trim: true,
        required: true,
    },
    in_time: {
        type: String,
        trim: true,
        required: true,
    },
    out_time: {
        type: String,
        trim: true,
        required: true,
    },
    purpose: {
        type: String,
        trim: true,
        required: true,
    },
    no_of_people: {
        type: String,
        trim: true
    },
    relation: {
        type: String,
        trim: true,
    },
    in_campus: {
        type: Boolean,
        trim: true,
        required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema, 'allUsers');
