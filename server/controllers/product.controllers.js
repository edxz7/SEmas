const Product = require("../models/Product");

exports.createProduct = async (req, res, next) => {
    console.log(req.body)
    await Product.create( req.body.products)
    .then((products) => { res.status(201).json({ products, msg:`productos creados ${products.length}`})
    .catch((err) => res.status(500).json({ err })); });
}

exports.getProduct =  async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
}

// exports.deletePost = (req, res) => {
//   const {id} = req.params
//   Post.findByIdAndDelete(id)
//       .then(() =>{ 
//         res.redirect(`/profile/${req.user._id}`)
//       })
//       .catch(err => console.log(err))
// };

// exports.editPostGet = (req, res) => {
//   const { id } = req.params;
//   Project.findById(id)
//     .then((post) => {
//       console.log(post)
//       res.render('postPages/editPost', { post });
//     })
//     .catch((err) => console.log(err));
// };

// exports.editPostPost =  (req, res) => {
//   const { id } = req.params;
//   Project.findByIdAndUpdate(id, {	$set: {...req.body}}, { new: true })
//     .then((post) => res.redirect(`/project/${post._id}/edit`))
//     .catch((err) => console.log(err));
// };

// exports.postDetailsGet =  async (req, res) => {
//   const { id } = req.params;
//   const post = await Post.findById(id).populate("author");
//   res.render("postPages/postDetailsPage", { post });
// }