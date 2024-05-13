// importando tipos de dados
const { DataTypes } = require('sequelize')

// importando db
const db = require('../db/conn')

// definindo o model Task
const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }
})

// exportando Task
module.exports = Task