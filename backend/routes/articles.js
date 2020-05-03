const router = require('express').Router();
let Article = require('../models/article.model');

//Multer Setup, this set up how our imag =e will be uploaded
const multer = require("multer");
//setting up where our images will be saved
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploadsImages");
    },
    filename: function (req, file, cb) {
        //Generating a unique name for every file uploaded
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

//Setting up a filter for our file in order to bloc all unwanted files type
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"
    ) {
        cb( null, true);
    } else {
        cb( null, false);
    }
};

//setting our upload variable, this will be use to upload our file
//and will excute all the function defined above in order to filter our images
const upload = multer({
    storage: storage,
    limits: {
        files: 1
    },
    fileFilter: fileFilter
});

//@route GET
//@description: finding all products in our DB
router.route('/').get((req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method POST
//@description: adding a new product in our DB
router.route('/add').post(upload.single("uploaded_file"), function (req, res) {
    const article_name = req.body.article_name;
    const description = req.body.description;
    const date = Date.parse(req.body.date);
    const article_img = req.file.path;

    const newArticle = new Article({
        article_name,
        description,
        date,
        article_img
    });

    newArticle.save()
        .then(() => res.json('Article added'))
        .catch(err => res.status(400).json('Error: ' +err));
})


//@route method GET
//@decription: Finding a specific article
router.route('/:id').get((req, res) => {
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method DELETE
//@decription: deleting a specific article
router.route('/:id').delete((req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.json('Article deleted.'))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method POST
//@decription: Updating a specific article
router.route('/update/:id').post(upload.single("uploaded_file"), function (req, res) {
    Article.findById(req.params.id)
        .then( article => {
            article.article_name = req.body.article_name;
            article.description = req.body.description;
            article.date = Date.parse(req.body.date);
            article.article_img = req.file.path;

            article.save()
                .then(() => res.json('Article updated'))
                .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;