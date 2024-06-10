// importando módulos
const express = require('express')
const exphbs = require('express-handlebars')

// definindo app como função express
const app = express()

// importando a conexão
const conn = require('./db/conn')

// configurando handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('views', 'handlebars')

// middleware para ler o body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// iniciando o express
app.listen(3000)