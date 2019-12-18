const User = require('../models/User');
const Commerce = require('../models/Commerce');

// Method	Endpoint	    Parameters              	              Return Value
// POST  	/auth/signup	username, userLastName, email, password   User created
exports.signup =  (req, res) => {
    const { username, userLastName, email, password, name, address, category, numEmployees  } = req.body;
    console.log(req.body)
     User.register( { username, userLastName, email }, password)
        .then((user) => { 
            res.status(201).json({ user }); 
             Commerce.create( { name, address, category, numEmployees, author: user._id})
            .then((commerce) => { res.status(201).json({ commerce, msg:`productos creados ${commerce.length}`})
            .catch((err) => res.status(500).json({ err })); });
        })
        .catch((err) => res.status(500).json({ err }));
}
// Method	Endpoint	    Parameters      	Return Value
// POST	    /auth/login  	username, password	User logged
exports.login = async (req, res) => {
    const { user } = req;
    console.log(user._id)
    const commerce = await Commerce.findOne({author: user._id})
    console.log(commerce)
    res.status(200).json({ user:user, commerce:commerce })
}

// Method	Endpoint	    Parameters      	Return Value
// POST	    /auth/logout	                    OK Message
exports.logout = (req, res) => {
    req.logout();
    res.json({ msg: "The user logout successfully" });
}

// Method	Endpoint	    Parameters      	        Return Value
// GET	    /auth/loggedin                              User logged
exports.loggedin = (req, res, next) => {
    console.log(req.user._id)
    User.findById(req.user._id)
        .then((user) => res.status(200).json({ user }))
        .catch((err) => res.status(500).json({ err }));
}

// Method	Endpoint	    Parameters      	               Return Value
// POST	    /auth/edit	    username, userLastName, email	   User updated
exports.edit = async (req, res) => {
    const { username, userLastName, email } = req.body
    await User.findByIdAndUpdate(req.user._id, { username, userLastName, email })
        .then(user => res.status(200).json({ user }))
        .catch(err => console.log(err));
}

// Method	Endpoint	    Parameters      	        Return Value
// POST	    /auth/upload	file	                    User updated
exports.upload = async (req, res) => {
    console.log(req.file)
    if (req.file) {
        const { secure_url } = req.file;
        await User.findByIdAndUpdate(req.user._id, { image: secure_url })
        .then(() =>{ 
            res.status(200).json({ file: req.file })})
        .catch(err => console.log(err));
    }
}
