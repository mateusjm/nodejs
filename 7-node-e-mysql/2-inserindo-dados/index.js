// importação pacotes 
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

// body em json
app.use(
    express.urlencoded({
        extended: true
    })
)

// configuração template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// arquivos estáticos CSS
app.use(express.static('public'))

// rota home
app.get('/', (req, res)=> {
    res.render('home')
})

app.use(express.json())

// rota insertbooks
app.post('/books/insertbook', (req, res)=> {

    // extraindo as informações do formulário pelo body
    const title = req.body.title
    const pageqty = req.body.pageqty

    // string rígida para abstração dos valores
    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`

    // executar a query
    conn.query(sql, function (err) {
        if(err) {
            console.log(err)
        }

        // redirecionar para home
        res.redirect('/')
    })

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