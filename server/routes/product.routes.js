const router = require("express").Router();
const { isAuth } =  require("../middleware/middllewares");
// const uploadCloud = require("../config/cloudinary");

const {
  createProduct,
  createPostGet,
  productGet,
  deleteProduct,
  editProductGet,
  editProductPost,
  productDetailsGet 
} = require('../controllers/product.controllers')


// router.get('/post', createPostGet);
// router.post('/post/create', uploadCloud.single("photo"), createPostPost);
router.post('/product/create', isAuth, createProduct);
// router.post("/product/:id",    postGet);
// router.get("/product/:id/delete", deletePost);
// router.get('/product/:id/edit', editPostGet);
// router.post('/product/:id/edit', editPostPost);
// router.get('/product/:id', postDetailsGet);

module.exports= router;