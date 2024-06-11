// importando módulos
const express = require('express')
const exphbs = require('express-handlebars')

// definindo app como função express
const app = express()

// importando a conexão
const conn = require('./db/conn')

// importando routes
const productsRoutes = require('./routes/productsRoutes')

// configurando handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// middleware para ler o body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// uso de arquivos estáticos
app.use(express.static('public'))

app.use('/products', productsRoutes)

// iniciando o express
app.listen(3000)