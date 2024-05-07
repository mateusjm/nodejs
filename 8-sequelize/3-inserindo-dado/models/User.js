// importando DataTYpes para ter acesso a todo os tipos de dados
const { DataTypes } = require('sequelize')

// chamaremos a conexão do banco, faremos uma operação com o banco
const db = require('../db/conn')

// o método 'define' define model
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    occupation : {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = User