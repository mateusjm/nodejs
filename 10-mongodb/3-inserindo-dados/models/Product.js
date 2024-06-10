// importando conexão
const conn = require('../db/conn')

// criando nosso objeto Product com JS
class Product {

    // propriedades do objeto
    constructor(name, price, description) {

        this.name = name
        this.price = price
        this.description = description

    }

    // método save
    save() {
        // criando a collection 'products'
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.description
        })

        return product

    }

}

module.exports = Product