const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    first_name: { type: String, required: true, minlength: 3, maxlength: 20},
    last_name: { type: String, required: true, minlength: 3, maxlength: 20},
    position: { type: String, required: true, minlength: 3, maxlength: 35,},
    description: { type: String, required: true, minlength: 20, maxlength: 200},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;