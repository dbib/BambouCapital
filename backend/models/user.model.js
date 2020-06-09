const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    pseudo: { 
        type: String, 
        required: true, 
    },
    email: { 
        type: String, 
        required: true, 
    },
    password: { 
        type: String, 
        required: true, 
    },
    /*register_date: { 
        type: Date, 
        required: true
    }*/
});

const User = mongoose.model('User', userSchema);

module.exports = User;