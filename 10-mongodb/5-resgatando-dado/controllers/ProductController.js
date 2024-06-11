// importando o objeto Product Js com as collections, métodos e documents
const Product = require('../models/Product')

// criando a lógica de Produtos
module.exports = class ProductController {

    // lógica mostrar Produtos
    static async showProducts(req, res) {
        // esperando o db e retornando o Array de produtos
        const products = await Product.getProducts()

        res.render('products/all', {products})
    }

    // lógica criar Produto
    static createProduct(req ,res) {
        res.render('products/create')
    }

    // lógica criar ProdutoPost

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

    // lógica resgatar dado
    static async getProduct(req, res) {
        const id = req.params.id

        const product = await Product.getProductById(id)

        res.render('products/product', {product})
    }
}