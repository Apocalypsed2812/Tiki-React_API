const express = require('express')
const router = express.Router()

const ProductController = require('../controlers/ProductController.js')
const checkLoginUser = require('../midlewares/checkLoginUser')

router.get('/', ProductController.getProduct)
router.get('/:id', ProductController.getProductBuyId)
router.post('/delete', ProductController.deleteProduct)
router.post('/', ProductController.addProduct)

module.exports = router