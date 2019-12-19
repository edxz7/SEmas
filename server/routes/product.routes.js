const router = require("express").Router();
const { isAuth } =  require("../middleware/middllewares");
// const uploadCloud = require("../config/cloudinary");

const {
  createProduct,
  getProduct,
  deleteProduct,
  editProduct
} = require('../controllers/product.controllers')

router.post('/create', createProduct);
router.get('/get', getProduct);
router.post('/edit/:id', editProduct);
router.post('/delete', deleteProduct);

module.exports= router;