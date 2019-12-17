const {model, Schema} = require('mongoose');
const commerceSchema = new Schema(
    {
        name:String,
        adress:String,
        category:String,
        businessType:String,
        numEmployees:String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }, {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Commerce', commerceSchema);