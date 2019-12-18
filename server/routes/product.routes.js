const router = require("express").Router();
const { isAuth } =  require("../middleware/middllewares");
// const uploadCloud = require("../config/cloudinary");

const {
  createProduct,
  getProduct,
  deleteProduct,
  editProduct
} = require('../controllers/product.controllers')

router.post('/create', isAuth, createProduct);
router.get('/get', isAuth, getProduct);
router.post('/edit/:id', isAuth, editProduct);
router.post('/delete', isAuth, deleteProduct);

module.exports= router;