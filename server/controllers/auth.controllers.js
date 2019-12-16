const User = require('../models/User');

// Method	Endpoint	    Parameters              	              Return Value
// POST  	/auth/signup	username, userLastName, email, password   User created
exports.signup = async (req, res) => {
    const { username, userLastName, email, password } = req.body;
    if(email ==="" || password==="") {
        res.json({ err:"El email y password son requeridos" });
    } 
    await User.register( { username, userLastName, email }, password)
        .then((user) => { res.status(201).json({ user }); })
        .catch((err) => res.status(500).json({ err }));
}
// Method	Endpoint	    Parameters      	Return Value
// POST	    /auth/login  	username, password	User logged
exports.login = (req, res) => {
    const { user } = req;
    res.status(200).json({ user })
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

