
const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')
const UserController = require('../controllers/userController')
const OrderController = require('../controllers/orderController')
const Mid1 = require('../middlewares/commonMiddlewares')


router.post("/createProduct", ProductController.createProduct)

router.post("/createUser", Mid1.validateHeader , UserController.createUser)

router.post("/createOrder", Mid1.validateHeader, Mid1.mid2 , OrderController.createOrder )







module.exports = router 