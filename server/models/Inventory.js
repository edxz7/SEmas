const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
	commerce: {
		type: Schema.Types.ObjectId,
		ref: 'Commerce'
	}
});

const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory;