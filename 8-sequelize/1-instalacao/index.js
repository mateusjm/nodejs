// importação pacotes 
const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express()

// body em json
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// configuração template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// arquivos estáticos CSS
app.use(express.static('public'))

// rota home
app.get('/', (req, res)=> {
    res.render('home')
})

app.listen(3000)