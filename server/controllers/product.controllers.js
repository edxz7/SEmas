const Product = require("../models/Product");

exports.createProduct = async (req, res, next) => {

    await Product.create( req.body.products)
    .then((products) => { res.status(201).json({ products, msg:`productos creados ${products.length}`})
    .catch((err) => res.status(500).json({ err })); });
}

exports.getProduct =  async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
}

exports.deleteProduct = async (req, res) => {
	const product = await Product.findByIdAndDelete(req.body.productId)
	res.status(201).json(product)
      .catch(err => console.log(err))
};

exports.editProduct = async (req, res) => {
  const { id } = req.params
  const { quantity } = req.body
  const product = await Product.findByIdAndUpdate(id, {	$set: { quantity } }, { new: true })
  .catch(err => console.log(err))
  res.status(201).json(product)
};



