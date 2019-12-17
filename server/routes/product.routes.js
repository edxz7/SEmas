const router = require("express").Router();
const { isAuth } =  require("../middleware/middllewares");
// const uploadCloud = require("../config/cloudinary");

const {
  createProduct,
  getProduct
} = require('../controllers/product.controllers')

router.post('/product/create', isAuth, createProduct);
router.get('/product/get', isAuth, getProduct);

module.exports= router;