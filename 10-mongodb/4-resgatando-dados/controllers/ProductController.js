// importando o objeto Product Js com as collections, métodos e documents
const Product = require('../models/Product')

// criando a lógica de Produtos
module.exports = class ProductController {

    // rota mostrar Produtos
    static async showProducts(req, res) {
        // esperando o db e retornando o Array de produtos
        const products = await Product.getProducts()

        res.render('products/all', {products})
    }

    // rota criar Produto
    static createProduct(req ,res) {
        res.render('products/create')
    }

    // rota criar ProdutoPost

    static async createProductPost(req, res) {
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description

        // criando o product através da classe Product, estamos instanciando
        const product = new Product(name, image, price, description)

        // salvando product no db
        product.save()

        res.redirect('/products')

    }
}