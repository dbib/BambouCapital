const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    itemName: { 
        type: String, 
        required: true, 
        //minlength: 3, 
        //maxlength: 15
    },
    description: { 
        type: String,
        required: true, 
        //minlength: 25, 
        //maxlength: 250
    },
    date: { 
        type: Date, 
        required: true
    },
    //product picture
    imagePath: {
        type: String,
        required: true
    },
    imageFieldname: {
        type: String,
        required: true
    },
    imageOriginalname: {
        type: String,
        required: true
    },
    imageEncoding: {
        type: String,
        required: true
    },
    imageMimetype: {
        type: String,
        required: true
    },
    imageFilename: {
        type: String,
        required: true
    },
    imageSize: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const ArticleImg = mongoose.model('ArticleImg', articleSchema);

module.exports = ArticleImg;