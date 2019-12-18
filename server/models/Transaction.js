const {model, Schema} = require('mongoose');
const transactionSchema = new Schema(
    {
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