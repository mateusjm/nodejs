// importando o objeto Product Js com as collections, métodos e documents
const Product = require('../models/Product')

// criando a lógica de Produtos
module.exports = class ProductController {

    // rota mostrar Produtos
    static showProducts(req, res) {
        res.render('products/all')
    }

    // rota criar Produto
    static createProduct(req ,res) {
        res.render('products/create')
    }
}