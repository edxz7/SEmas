const router = require("express").Router();
const { isAuth } =  require("../middleware/middllewares");
const { createTransaction } = require('../controllers/transaction.controllers')

router.post('/product/create', isAuth, createTransaction);

module.exports= router;