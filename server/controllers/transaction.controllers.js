const Transaction = require("../models/Transaction");
const Commerce = require("../models/Commerce");

exports.createTransaction = async (req, res) => {
    const { itemId, author, commerceId } = req.body;
    const transaction = await Transaction.create({ itemId, author, commerceId })
    await Commerce.findByIdAndUpdate(commerceId, { $push: { transactions: transaction._id } })
    res.json({message: 'created'})
}

    exports.getTransaction = async (req, res) => {
        Commerce.find({ store: id })
        .populate('commerceId')
        .populate('author')
        .then((transaction) => {
            res.status(200).json({ transaction });
        })
        .catch((err) => console.log(err));
    }

