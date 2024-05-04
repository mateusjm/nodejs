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

// rota books
app.get('/books', (req, res)=> {

    const sql = 'SELECT * FROM books'

    conn.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const books = data
        console.log(books)

        res.render('books', {books})
    })

})

// id
app.get('/books/:id', (req, res)=> {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]
        res.render('book', {book})

    })
})

// rota editar livro
app.get('/books/edit/:id', (req, res)=> {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]
        res.render('editbook', {book})
        
    })

})

// rota de update
app.post('/books/updatebook', (req, res)=> {

    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET title = '${title}', pageqty = ${pageqty} WHERE id = ${id}`

    conn.query(sql, function(err){
        if(err) {
            console.log(err)
            return
        }

        res.redirect(`/books/edit/${id}`)
    })
})

// rota remover livro
app.post('/books/remove/:id', (req,res)=> {

    const id = req.params.id

    const sql = `DELETE FROM books WHERE id = ${id}`

    conn.query(sql, function(err) {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
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