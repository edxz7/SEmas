const {model, Schema} = require('mongoose');
const PLM = require("passport-local-mongoose");
const userSchema = new Schema(
    {
        username:String,
        userLastName:String,
        email:String,
        password:String
    }, {
        timestamps: true,
        versionKey: false
    }
)

let options = {
    errorMessages: {
        MissingPasswordError: 'No password was given',
        AttemptTooSoonError: 'Account is currently locked. Try again later',
        TooManyAttemptsError: 'Account locked due to too many failed login attempts',
        NoSaltValueStoredError: 'Authentication not possible. No salt value stored',
        IncorrectPasswordError: 'Password o email incorrectos',
        IncorrectUsernameError: 'Password o email incorrectos',
        MissingUsernameError: 'No username was given',
        UserExistsError: 'A user with the given username is already registered'
    }
};

userSchema.plugin(PLM, {
    usernameField: "email"
  });
module.exports = model('User', userSchema);

