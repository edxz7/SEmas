const {model, Schema} = require('mongoose');
const commerceSchema = new Schema(
    {
        name:String,
        address:String,
        category:String,
        businessType:String,
        numEmployees:String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        transactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Transaction'
            }
        ]
    }, {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Commerce', commerceSchema);