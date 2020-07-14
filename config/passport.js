const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load Admin Model
const Admin = require('../models/admin.model');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameFiel: 'email'}, (pseudo, password, done) => {
            // Match User
            Admin.findOne( { email: email })
                .then( adminuser => {
                    if (!adminuser) {
                        return done(null, false, { message: 'That email is not registered'});
                    }

                    // Match password
                    bcrypt.compare(passport, adminuser.password, ( err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, adminuser);
                        } else {
                            return done(null, false, { message: 'Password incorrect'});
                        }
                    })
                })
                .catch( err => console.log(err));
        })
    );

    passport.serializeUser((adminuser, done) => {
        done(null, adminuser.id);
    });

    passport.deserializeUser((id, done) => {
        Admin.findById(id, (err, adminuser) => {
            done(err, adminuser);
        });
    });

} 