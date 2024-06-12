// importando mongoose 
const mongoose = require('mongoose')

// criando conexão com o Banco de Dados
async function main() {
    await mongoose.connect('mongodb://localhost:27017/testemongoose')
    console.log('Conectou ao MongoDb com Mongoose')
}

main().catch((err)=> console.log(err))

// exportando mongoose
module.exports = mongoose