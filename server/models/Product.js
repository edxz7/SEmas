const { model, Schema } = require('mongoose');
const productSchema = new Schema(
    {
        brand: String,
        item: String,
        category:String,
        class: {
            subclass:String
        },
        price: Number,
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, {
    timestamps: true,
    versionKey: false
});


module.exports = model('Product', productSchema);