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
userSchema.plugin(PLM, {
    usernameField: "email"
  });
module.exports = model('User', userSchema);

