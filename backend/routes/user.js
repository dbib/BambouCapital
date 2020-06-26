const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// Adding our environment variable
require("dotenv").config({ path: __dirname + "../.env" });

//User Model
let User = require("../models/user.model");

//@route POST /user
//@description: fRegister new user
//@access Public
router.route("/register").post((req, res) => {
  const { pseudo, email, password, passwordConfirmation } = req.body;

  //Validation
  if (!pseudo || !email || !password || !passwordConfirmation) {
    return res.status(400).json({ msg: "Veuillez remplir toute les cases" });
  }

  //Verifiying password correpondance
  if (password !== passwordConfirmation) {
    return res.status(400).json({
      msg: "Veuillez ecrirez un mot seule mot de passe pour le 2 champs",
    });
  }

  // Check for existing user
  User.findOne({ email }).then((user) => {
    if (user)
      return res
        .status(400)
        .json({ msg: "un utilisateur qui a ce nom existe deja" });

    const newUser = new User({
      pseudo,
      email,
      password,
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            process.env.JWTSECRET,

            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  pseudo: user.pseudo,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

//@route POST user/auth
//@description: Auth user
//@access Public
router.route("/auth").post((req, res) => {
  const { pseudo, password } = req.body;

  //Validation
  if (!pseudo || !password) {
    return res.status(400).json({ msg: "Veuillez remplir toutes les cases" });
  }

  // Check fro existing user
  User.findOne({ pseudo }).then((user) => {
    if (!user)
      return res.status(400).json({ msg: "nom d'utilisateur n'existe pas" });

    // Validate password

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ msg: " mot de passe incorrect " });

      jwt.sign(
        { id: user.id },
        process.env.JWTSECRET,

        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              pseudo: user.pseudo,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

//@route GET user/admin
//@description: Get admin data
//@access Public

router.route("/singleuser").get(auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
