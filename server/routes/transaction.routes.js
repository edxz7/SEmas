const router = require("express").Router();
// const { isAuth } =  require("../middleware/middllewares");
const { 
    createTransaction,
    getTransaction 
} = require('../controllers/transaction.controllers')

router.post('/create',  createTransaction);
router.post('/get',  getTransaction);

module.exports= router;