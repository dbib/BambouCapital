const router = require('express').Router();
let Admin = require('../models/admin.model');
const bcrypt = require('bcryptjs');
const passport = require('passport');

//@route GET
//@description: finding all admin in our DB

router.route('/').get((req, res) => {
    Admin.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(400).json('Error: '+ err));
});


//Login Page
router.route('/login').get((req, res) => res.send(`Login`));  


//User
router.route('/user').get((req, res) => res.send('User'))

//Register Handle
router.route('/register').post((req, res) => {
    const { pseudo, email, password, passwordconfirm} = req.body;
    let errors = [];

    // Check required fields
    if(!pseudo || !email || !password || !passwordconfirm) {
        errors.push({msg: 'Completer toute les cases svp'})
    }

    // Check Pass match
    if(password !== passwordconfirm) {
        errors.push({ msg: 'Passwords do not match'})
    }

    // Check pass length
    if(password.length < 6) {
        errors.push({ msg: 'Le mot de passe doit avoir au moins 6 lettres'});
    }

    if(errors.length > 0) {
        res.status(400).send({
            errors,
            pseudo,
            email,
            password,
            passwordconfirm
        })
    } else {

        console.log(email);
        // Validation passed
        Admin.findOne({ email: email})
            .then(user => {
                if(user) {
                    errors.push({ msg: 'Email is already register'})
                    res.status(400).send({
                        errors,
                        pseudo,
                        email,
                        password,
                        passwordconfirm
                    })
                } else {
                    const newAdmin = new Admin({
                        pseudo,
                        email,
                        password
                    });

                    // HAsh Password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                            if(err) throw err;
                            
                            // Set password to hased
                            newAdmin.password = hash;

                            //Save User
                            newAdmin.save()
                                .then(user => {
                                    req.flash( 'success_msg', 'You are now registered and can log in')
                                    res.status(200).json({
                                        redirectUrl: '/adminlogin'
                                    })
                                })
                                .catch( err => console.log(err));

                    }))
                }
            })
    }
});


// Login handle
router.route('/login').post((req, res, next) => {
    console.log('Passed');
    passport.authenticate('', {
        successRedirect: '/adminmain',
        failureRedirect: '/adminlogin',
        failureFlash: true
    })(req, res, next);
})


module.exports = router;