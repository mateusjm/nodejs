const mysql = require('mysql2')

// connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '2020',
    database: 'nodemysql'
})

module.exports = pool