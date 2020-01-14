const {model, Schema} = require('mongoose');
const commerceSchema = new Schema(
    {
        name:String,
        address:String,
        category:String,
        businessType:String,
        numEmployees:String,
        place: {
            type: {
                default: 'Point'
            },
            coordinates: [ Number ]
        },     
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

commerceSchema.index({
    place:"2dsphere"
})

module.exports = model('Commerce', commerceSchema);