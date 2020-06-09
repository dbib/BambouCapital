const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// Adding our environment variable
require('dotenv').config({path: __dirname + '../.env'});


//User Model
let User = require('../models/user.model');

//@route POST /user
//@description: fRegister new user
//@access Public
router.route('/').post((req, res) => {
    const { pseudo, email, password } = req.body;

    //Validation
    if (!pseudo || !email || !password) {
        return res.status(400).json( { msg: 'Please enter all fields'});
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists'});

            const newUser = new User({
                pseudo, 
                email,
                password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                process.env.JWTSECRET,

                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            pseudo: user.pseudo,
                                            email: user.email
                                        }
                                    });
                                }
                            )
                            
                        })
                })
            })
        })
});


//@route POST user/auth
//@description: Auth user
//@access Public
router.route('/auth').post((req, res) => {
    const { email, password } = req.body;

    //Validation
    if (!email || !password) {
        return res.status(400).json( { msg: 'Please enter all fields'});
    }

    // Check fro existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exists'});

            // Validate password

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials '});

                    jwt.sign(
                        { id: user.id },
                        process.env.JWTSECRET,

                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    pseudo: user.pseudo,
                                    email: user.email
                                }
                            });
                        }
                    )
                })
            
        })
});

//@route GET user/auth/admin
//@description: Get admin data
//@access Public

router.route('/admin').get(auth, (req, res) => {
    User.findById(req.user.id)
        .select('password')
        .then(user => res.json(user));
})


module.exports = router;