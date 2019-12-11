const {model, Schema} = require('mongoose');
const productSchema = new Schema(
    {

        brand:String,
        productName:String,
        detail:[String],
        price:Number,
        quantity:Number,
        transaction:Number,
        author: {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    }
)

module.exports = model('Product', productSchema);