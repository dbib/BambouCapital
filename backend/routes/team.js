const router = require('express').Router();
let Team = require('../models/team.model');

//@route GET
//@description: finding all team members in our DB
router.route('/').get((req, res) => {
    Team.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method POST
//@description: adding a new article in our DB
router.route('/add').post((req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const position = req.body.position;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newMember= new Member({
        first_name,
        last_name,
        position,
        description,
        date
    });

    newMember.save()
        .then(() => res.json('member added'))
        .catch(err => res.status(400).json('Error: ' +err));
});

//@route method GET
//@decription: Finding a specific member
router.route('/:id').get((req, res) => {
    Team.findById(req.params.id)
        .then(team => res.json(team))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method DELETE
//@decription: deleting a specific member
router.route('/:id').delete((req, res) => {
    Team.findByIdAndDelete(req.params.id)
        .then(() => res.json('Member deleted.'))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method POST
//@decription: Updating a specific member information
router.route('/update/:id').post((req, res) => {
    Team.findById(req.params.id)
        .then( article => {
            team.first_name = req.body.first_name;
            team.last_name = req.body.last_name;
            team.position = req.body.position;
            team.description = req.body.description;
            team.date = Date.parse(req.body.date);

            team.save()
                .then(() => res.json('Article updated'))
                .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
});


module.exports = router;