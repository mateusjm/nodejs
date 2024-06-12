// importando o mongoose
const mongoose = require('mongoose')
// importando o Schema do mongoose
const {Schema} = mongoose

// criando classe Product e inserindo o Schema dentro do método model
const Product = mongoose.model(
    'Product',
    new Schema({
        name: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true}
    })
)

// exportando Product
module.exports = Product