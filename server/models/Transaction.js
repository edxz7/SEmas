const {model, Schema} = require('mongoose');
const transactionSchema = new Schema(
    {
        quantity: Number,
        item: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    }, {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Transaction', transactionSchema);