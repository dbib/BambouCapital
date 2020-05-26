const router = require('express').Router();
let Article = require('../models/article.model');
let ArticleImg = require('../models/upload.model');

//Multer Setup, this set up how our imag =e will be uploaded
const multer = require("multer");
const path = require("path");
const fs = require("fs")

//Set Storage Engine
const storage = multer.diskStorage({
    destination: '../public/ressources/uploads',
    filename: function(req, file, cb) {
        cb(null, file.fieldname+'-'+Date.now() + path.extname(file.originalname));
    }
});

//Check File Type
function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png/;
    //check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true)
    } else {
        cb(`Error: Images Only!`)
    }
}

//Init upload
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb){
        checkFileType(file,cb)
    }
}).single('file');

//@route method POST
//description: method for adding complete product (product infos and product img) in our DB
router.route('/upload').post((req, res) => {
    upload(req, res, (err) => {
        if(err){
            console.log(`An error occurred ${err}`)
        } else{
            if(req.file == undefined){
                console.log(`error: No file selected!`)
            } else {
                //here we took the last article in the collection article in our db and then we save those datas in variables
                //and we take our image file from the client and save the info we need in a variable
                //then we create a new article with all information and save them in the article Imgs collection
                //and finally we delete the article inside article collection
                Article.find().sort({date:-1}).limit(1)
                    .then(article => {
                        const item = JSON.stringify(article);
                        const itemConverted = JSON.parse(item);
                        const idValue = itemConverted[0]._id;
                        const itemName = itemConverted[0].itemName;
                        const description = itemConverted[0].description;
                        const date = Date.parse(new Date());
                        const imagePath = req.file.path;
                        const imageFieldname = req.file.fieldname;
                        const imageOriginalname = req.file.originalname;
                        const imageEncoding = req.file.encoding;
                        const imageMimetype = req.file.mimetype;
                        const imageFilename = req.file.filename;
                        const imageSize = req.file.size;

                        const newArticleImg = new ArticleImg({
                            itemName,
                            description,
                            date,
                            imagePath,
                            imageFieldname,
                            imageOriginalname,
                            imageEncoding,
                            imageMimetype,
                            imageFilename,
                            imageSize
                        });

                        newArticleImg.save()
                            .then(()=> {
                                res.json(`The product had been successfully added`);
                                console.log(`The new Product had been successfully added`);
                            })
                            .catch( err => res.status(400).json(`Error: ${err}`));

                        Article.findByIdAndDelete(idValue)
                            .then(() => console.log(`The previous version has successfully been deleted`))
                            .catch( err => res.status(400).json(`Error: ${err}`));

                    });
            }
        }
    })
})

//@route method POST
//@description: adding a new product infos in our DB for a moment
router.route('/add').post((req, res) => {
    const itemName = req.body.itemName;
    const description = req.body.description;
    const date = Date.parse(req.body.date);
    const newArticle = new Article({
        itemName,
        description,
        date
    });

    newArticle.save()
        .then(() => res.json('Product infos added'))
        .catch(err => res.status(400).json('Error: ' +err));
    
    console.log(`New Product infos have been added to the database`);
});

//@route GET
//@description: finding all products in our DB
router.route('/').get((req, res) => {
    ArticleImg.find().sort({date: -1})
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method GET
//@decription: Finding a specific article
router.route('/:id').get((req, res) => {
    ArticleImg.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method DELETE
//@decription: deleting a specific article
router.route('/:id').delete((req, res) => {
    ArticleImg.findByIdAndDelete(req.params.id)
        .then((article) => {
            fs.unlink(article.imagePath, (err) => {
                if (err) throw err;
                console.log(`The product named ${article.imageFilename} had been deleted`);
            });
            res.json('Article deleted.')
        })
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method POST
//@decription: Updating a specific article
router.route('/update/:id').post((req, res) => {
    ArticleImg.findById(req.params.id)
        .then( article => {
            article.itemName = req.body.itemName;
            article.description = req.body.description;
            article.date = Date.parse(req.body.date);

            article.save()
                .then(() => res.json('Article updated'))
                .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/updateimage/:id').post((req, res) => {
    upload(req, res, (err) => {
        if(err){
            console.log(`An error occurred ${err}`)
        } else{
            if(req.file == undefined){
                console.log(`error: No file selected!`)
            } else {
                ArticleImg.findById(req.params.id)
                    .then( article => {
                        //deleting the old image
                        fs.unlink(article.imagePath, (err) => {
                            if (err) throw err;
                            console.log(`The product named ${article.imageFilename} had been deleted`);
                        });


                        article.imagePath = req.file.path;
                        article.imageFieldname = req.file.fieldname;
                        article.imageOriginalname = req.file.originalname;
                        article.imageEncoding = req.file.encoding;
                        article.imageMimetype = req.file.mimetype;
                        article.imageFilename = req.file.filename;
                        article.imageSize = req.file.size;


                        article.save()
                            .then(() => res.json('Article updated'))
                            .catch(err => res.status(400).json('Error: '+ err));
                    })
                    .catch(err => res.status(400).json('Error: '+ err));
            }
        }
    })
})


module.exports = router;