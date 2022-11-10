const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userCollection = new Schema({
    mediaId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    mediaType: {
        type: String,
        required: true
    },
    saveType: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Collection", userCollection);