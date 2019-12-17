const router = require("express").Router();
const { isAuth } =  require("../middleware/middllewares");

const {
    createInventory
} = require('../controllers/inventory.controllers')

router.post('/inventory/create', isAuth, createInventory);