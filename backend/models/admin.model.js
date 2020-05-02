const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    admin_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
   }
}, {
    timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;