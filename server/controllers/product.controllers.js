const Product = require("../models/Product");

exports.createProduct = async (req, res, next) => {
    const { _id } = req.user;
    await Product.create({ ...req.body, author: _id })
    .then((product) => { res.status(201).json({ product })
    .catch((err) => res.status(500).json({ err })); });
}

// exports.postGet = async (req, res) => {
//   const { id } = req.params;
//   const post = await Post.findById(id).populate("author");
//   res.render("postPages/postDetailsPage", { post });
// }

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