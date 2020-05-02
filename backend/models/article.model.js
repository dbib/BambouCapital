const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    article_name: { type: String, required: true, minlength: 3, maxlength: 15},
    description: { type: String, required: true, minlength: 25, maxlength: 250},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;