const router = require('express').Router();
let Article = require('../models/article.model');

//@route GET
//@description: finding all articles in our DB
router.route('/').get((req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method POST
//@description: adding a new article in our DB
router.route('/add').post((req, res) => {
    const article_name = req.body.article_name;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newArticle = new Article({
        article_name,
        description,
        date
    });

    newArticle.save()
        .then(() => res.json('Article added'))
        .catch(err => res.status(400).json('Error: ' +err));
});


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
router.route('/update/:id').post((req, res) => {
    Article.findById(req.params.id)
        .then( article => {
            article.article_name = req.body.article_name;
            article.description = req.body.description;
            article.date = Date.parse(req.body.date);

            article.save()
                .then(() => res.json('Article updated'))
                .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;