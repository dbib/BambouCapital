const router = require('express').Router();
let Admin = require('../models/admin.model');

//@route GET
//@description: finding all admin in our DB

router.route('/').get((req, res) => {
    Admin.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(400).json('Error: '+ err));
});

//@route method POST
//@description: adding a new admin in our DB

router.route('/add').post((req, res) => {
    const admin_name = req.body.admin_name;

    const newAdmin = new Admin({admin_name});

    newAdmin.save()
        .then(() => res.json('Admin added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;