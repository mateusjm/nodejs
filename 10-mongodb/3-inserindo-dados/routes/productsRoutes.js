// importando pacotes
const express = require('express')
const router = express.Router()

// importando controllers
const ProductController = require('../controllers/ProductController')

// rota para resgatar dados de 'criar produtos'
router.post('/create', ProductController.createProductPost)
// rota para renderizar 'criar produtos'
router.get('/create', ProductController.createProduct)
// rota para renderizar 'todos produtos'
router.get('/', ProductController.showProducts)

// exportando rotas
module.exports = router