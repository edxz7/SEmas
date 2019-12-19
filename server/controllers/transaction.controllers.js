const Transaction = require("../models/Transaction");
const Commerce = require("../models/Commerce");

exports.createTransaction = async (req, res) => {
    const { price, product, consumme, itemId, author, commerceId } = req.body;
    const transaction = await Transaction.create({price, product, quantity:consumme, itemId, author, commerceId })
    await Commerce.findByIdAndUpdate(commerceId, { $push: { transactions: transaction._id } })
    res.json({message: 'created'})
}

    exports.getTransaction = async (req, res) => {
        const { _id } = req.body;
        console.log("este es el req.body",req.body)
        const [transactions] = await Commerce.find({ _id: _id}).populate('transactions').populate('itemId')
        res.status(200).json({ transactions });
    }

