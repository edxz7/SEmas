const {model, Schema} = require('mongoose');
const commerceSchema = new Schema(
    {
        name:String,
        adress:String,
        business:String,
        businessType:String,
        numEmployees:String
    }
)

module.exports = model('Commerce', commerceSchema);