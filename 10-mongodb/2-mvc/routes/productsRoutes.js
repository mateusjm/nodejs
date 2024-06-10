// importando pacotes
const express = require('express')
const router = express.Router()

// importando controllers
const ProductController = require('../controllers/ProductController')

// rota mostrar produtos
router.get('/', ProductController.showProducts)

// exportando rotas
module.exports = router