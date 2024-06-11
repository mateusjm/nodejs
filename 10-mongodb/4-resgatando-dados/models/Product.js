// importando conexão
const conn = require('../db/conn')

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

}

// importando o objeto Product JS
module.exports = Product