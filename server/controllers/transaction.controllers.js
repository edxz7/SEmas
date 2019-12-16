const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
    const { _id } = req.user;
    await Transaction.create({ ...req.body, author: _id })
    .then((transaction) => { res.status(201).json({ transaction })
    .catch((err) => res.status(500).json({ err })); });
}