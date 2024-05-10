// importando DataTYpes para ter acesso a todo os tipos de dados
const { DataTypes } = require('sequelize')

// chamaremos a conexão do banco, faremos uma operação com o banco
const db = require('../db/conn')

// chamaremos User para criar uma relação entre Adress
const User = require('./User')

// criando Adress
const Address = db.define('Adress', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }

})

// Adress pertence a User
Address.belongsTo(User)

module.exports = Address