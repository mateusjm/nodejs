// conexão ao Banco de Dados
const { Sequelize } = require('sequelize')

// instância do Sequelize, definimos o servidor
const sequelize = new Sequelize('nodemvc', 'root', '2020', {
    host: 'localhost',
    dialect: 'mysql'
})

// verificamos se há um possível erro
try {
    sequelize.authenticate()
    console.log('Conectamos ao MySQL!')
} catch (error) {
    console.log(`Não foi possível conectar; ${error}`)
}

// exportamos Sequelize
module.exports = sequelize