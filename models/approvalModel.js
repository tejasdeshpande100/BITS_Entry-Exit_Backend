const mongoose = require('mongoose');

const approvalSchema = new mongoose.Schema(
  {
    visitor_name: {
        type: String,
        trim: true,
        required: true,
    },
    visitor_mobile: {
        type: String,
        trim: true,
        required: true,
    },
    purpose: {
        type: String,
        trim: true,
        required: true,
    },
    coming_from_city: {
        type: String,
        trim: true,
        required: true,
    },
    visitor_relation: {
        type: String,
        trim: true,
        required: true,
    },
    visitor_email: {
        type: String,
        trim: true,
        required: true,
    },
    accompanied_persons: {
        type: String,
        trim: true,
        required: true,
    },
    requesting_to: {
        type: String,
        trim: true,
        required: true,
    },
    department: {
        type: String,
        trim: true,
        required: true,
    },
    post: {
        type: String,
        trim: true,
        required: true,
    }
    


  },
  { timestamps: true }
);

module.exports = mongoose.model('Approval', approvalSchema, 'approval');
