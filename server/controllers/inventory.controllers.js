const Inventory = require("../models/Inventory");

exports.createInventory = async (req, res, next) => {
    const { _id } = req.user;
    await Inventory.create({ ...req.body, author: _id })
    .then((product) => { res.status(201).json({ product })
    .catch((err) => res.status(500).json({ err })); });
}