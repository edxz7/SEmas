const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const uploadCloud = require("../config/cloudinary");
const { isAuth } =  require("../middleware/middllewares");
const {
    signup,
    login,
    logout,
    upload,
    edit,
    loggedin
} = require('../controllers/auth.controllers')

router.post('/login',passport.authenticate('local'), login);
router.post('/signup', signup);
router.post('/edit', edit);
router.post('/logout', logout);
router.post("/upload", uploadCloud.single("photo"), upload);
router.get('/loggedin', isAuth, loggedin)




module.exports = router;