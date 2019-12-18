const { model, Schema } = require('mongoose');
const productSchema = new Schema(
    {
        brand: String,
        item: String,
        category:String,
        quantity:Number,
        class: {
            subclass:String
        },
        price: Number,
        commerceId: {
            type: Schema.Types.ObjectId,
            ref: "Commerce"
        }
    }, {
    timestamps: true,
    versionKey: false
});


module.exports = model('Product', productSchema);