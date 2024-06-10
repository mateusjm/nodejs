// importando objeto MongoClient para conectar ao banco
const { MongoClient } = require('mongodb')

// protocolo do MongoDb mais o IP do nosso servidor
const uri = 'mongodb://localhost:27017/testemongodb'

// definindo a constante client e passando o uri para a conexão
const client = new MongoClient(uri)

// função com objetivo de conectar
async function run() {
    try {
        
        await client.connect()
        console.log('Conectando ao MongoDB!')

    } catch (err) {
        console.log(err)
    }
}

run()

// exportando client
module.exports = client