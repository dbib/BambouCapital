const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    pseudo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

}, {
    timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;