// importando pacotes
const express = require('express')
const router = express.Router()

// importando controllers
const ProductController = require('../controllers/ProductController')

// rota para resgatar dados de 'criar produtos'
router.post('/create', ProductController.createProductPost)
// rota para renderizar 'criar produtos'
router.get('/create', ProductController.createProduct)

/* // rota para 'remover dado'
router.post('/remove/:id', ProductController.removeProduct)
// rota para 'editar dado' Post
router.post('/edit', ProductController.editProductPost)*/

// rota para 'editar dado'
router.get('/edit/:id', ProductController.editProduct)
// rota para 'resgatar dado'
router.get('/:id', ProductController.getProduct)
// rota para renderizar 'todos produtos'
router.get('/', ProductController.showProducts) 

// exportando rotas
module.exports = router