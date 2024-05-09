const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '2020', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize