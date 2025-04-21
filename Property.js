const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    virtualTour: { type: String },
    floorPlan: { type: String },
    streetView: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model('Property', propertySchema);
