const { model, Schema } = require('mongoose');
const productSchema = new Schema(
    {

        brand: String,
        productName: String,

        class: {
            subclass:String
        },
        price: Number,
        quantity: Number,
        transaction: Number,
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, {
    timestamps: true,
    versionKey: false
});


module.exports = model('Product', productSchema);