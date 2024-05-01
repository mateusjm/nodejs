// importação pacotes 
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

// configuração template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// arquivos estáticos CSS
app.use(express.static('public'))

// rota home
app.get('/', (req, res)=> {
    res.render('home')
})

// conexão node js com mysql
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2020',
    database: 'nodemysql'
})

// estabelecer a conexão a cada iteração da aplicação
conn.connect(function(err) {

    if(err) {
        console.log(err)
    }

    console.log('Conectou ao MySQL!')

    app.listen(3000)
})