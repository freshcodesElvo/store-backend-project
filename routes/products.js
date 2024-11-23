const express = require('express')
const router = express.Router()
const {get_all_products_static, get_all_products} = require('../controllers/products')

router.route('/').get(get_all_products)
router.route('/static').get(get_all_products_static)

module.exports = router