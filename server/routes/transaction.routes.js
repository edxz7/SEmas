const router = require("express").Router();
const { isAuth } =  require("../middleware/middllewares");
const { 
    createTransaction,
    getTransaction 
} = require('../controllers/transaction.controllers')

router.post('/create', isAuth, createTransaction);
router.post('/get', isAuth, getTransaction);

module.exports= router;