// importando os Pacotes para o index
const express = require('express')
const exphbs = require('express-handlebars')

// definimos app
const app = express()

// importando a conexão criada
const conn = require('./db/conn')

// importando models
const Task = require('./models/Task')

// importando routes
const tasksRoutes = require('./routes/tasksRoutes')

// definimos template engine e propriedades de view engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')    

// middleware para ler o body da requisição
app.use(
    express.urlencoded({
        extended: true
    })
)

// middleware para ler json
app.use(express.json())

// definindo o uso de arquivos estáticos
app.use(express.static('public'))

app.use('/tasks', tasksRoutes)

// sincronização
conn
    .sync()
    .then(()=> {
        app.listen(3000)
    })
    .catch(err => console.log(err))

