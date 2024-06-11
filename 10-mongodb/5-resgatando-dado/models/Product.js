// importando conexão
const conn = require('../db/conn')

// importando o mongo para utilizar o ObjectId
const {ObjectId} = require('mongodb')


// criando nosso objeto Product com JS
class Product {

    // propriedades do objeto
    constructor(name, image, price, description) {

        this.name = name
        this.image = image
        this.price = price
        this.description = description

    }

    // método save
    save() {
        // criando a collection 'products'
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description
        })

        return product

    }

    // método getAll
    static getProducts() {

        // chamando o banco e retornando todos elementeo em um Array
        const products = conn.db().collection('products').find().toArray()

        return products
    }

    // método getOne
    static async getProductById(id) {
        // resgatando um produto através do id dinâmico da requisição
        const product = await conn
        .db()
        .collection('product')
        .findOne({_id: new ObjectId(id)})

        return product
    }

}

// importando o objeto Product JS
module.exports = Product