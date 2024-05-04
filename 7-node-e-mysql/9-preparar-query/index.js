// importação pacotes 
const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

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
    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['title', 'pageqty', title, pageqty]

    // executar a query
    pool.query(sql, data, function (err) {
        if(err) {
            console.log(err)
        }

        // redirecionar para home
        res.redirect('/books')
    })

})

// rota books
app.get('/books', (req, res)=> {

    const sql = 'SELECT * FROM books'

    pool.query(sql, function(err, data) {
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

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, function(err, data) {
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

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, function(err, data) {
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

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pageqty', pageqty, 'id', id]

    pool.query(sql, data, function(err){
        if(err) {
            console.log(err)
            return
        }

        res.redirect(`/books`)
    })
})

// rota remover livro
app.post('/books/remove/:id', (req,res)=> {

    const id = req.params.id

    const sql = `DELETE FROM books WHERE ?? = ?`

    pool.query(sql, function(err) {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.listen(3000)