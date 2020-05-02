const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Image Schema for storing images in the mongodb database

const articleImgSchema = new Schema({
    imageName: {
        type: String,
        default: "none",
        required: true
    },
    imageData: {
        type: String,
        required: true 
    }
});

const ArticleImg = mongoose.model('ArticleImg', articleSchema);

module.exports = ArticleImg;