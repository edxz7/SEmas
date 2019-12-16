const {model, Schema} = require('mongoose');
const commerceSchema = new Schema(
    {
        name:String,
        adress:String,
        business:String,
        businessType:String,
        numEmployees:String
    }, {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Commerce', commerceSchema);