// importando o objeto Product Js com as collections, métodos e documents
const Product = require('../models/Product')

// criando a lógica de Produtos
module.exports = class ProductController {
 
    // lógica mostrar Produtos
    static async showProducts(req, res) {
        // esperando o db e retornando o Array de produtos
        const products = await Product.find().lean()

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
        const product = new Product({name, image, price, description})

        // salvando product no db
        await product.save()

        res.redirect('/')

    }

    // lógica resgatar dado
    static async getProduct(req, res) {
        const id = req.params.id

        const product = await Product.findById(id).lean()

        res.render('products/product', {product})
    }

    /*
    // lógica remover dado
    static async removeProduct(req, res) {
        const id = req.params.id

        await Product.removeProductById(id)

        res.redirect('/products')
    }

    // lógica editar dado
    static async editProduct(req, res) {
        const id = req.params.id

        // reaproveitando o método getProductById e resgatando dado
        const product = await Product.getProductById(id)

        res.render('products/edit', {product})
    }

    // lógica para salvar a edicão
    static async editProductPost(req, res) {
        
        const id = req.body.id
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description

        const product = new Product(name, image, price, description)

        await product.updateProduct(id)

        res.redirect('/products')

    } */
}