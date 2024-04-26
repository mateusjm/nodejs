// configuração da aplicação Express
const expres = require('express')
const exphbs = require('express-handlebars')

const app = expres()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(expres.static('public'))

// array de objeto de produtos
const products = [
    {
        id: '1',
        title: 'Livro',
        price: '12.99'
    },
    {
        id: '2',
        title: 'Cadeira',
        price: '200.99'
    },
    {
        id: '3',
        title: 'Lâmpada',
        price: '2.99'
    }
]

// rota home
app.get('/', (req, res) => {
    res.render('home', {products})
})

// rota dinâmica na url
app.get('/product/:id', (req, res) => {

    const product = products[parseInt(req.params.id) -1]

    res.render('product', {product})
})

// inicialização do projeto na porta 3000
app.listen(3000)
