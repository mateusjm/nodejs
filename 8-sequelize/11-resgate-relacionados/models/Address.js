// importando DataTYpes para ter acesso a todo os tipos de dados
const { DataTypes } = require('sequelize')

// chamaremos a conexão do banco, faremos uma operação com o banco
const db = require('../db/conn')

// chamaremos User para criar uma relação entre Adress
const User = require('./User')

// criando Adress
const Address = db.define('Address', {
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

// O User possui vários Adress, mas o Adress possui só um User
User.hasMany(Address)

// Adress pertence a User
Address.belongsTo(User)

module.exports = Address