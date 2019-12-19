const {model, Schema} = require('mongoose');
const transactionSchema = new Schema(
    {
        price:Number,
        quantity:Number,
        product:String,
        itemId: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },	
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        commerceId: {
            type: Schema.Types.ObjectId,
            ref: 'Commerce'
        }
    }, {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Transaction', transactionSchema);