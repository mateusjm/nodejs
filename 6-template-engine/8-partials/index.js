// importamos os pacotes
const express =require('express')
const exphbs = require('express-handlebars')

// definimos express como app
const app = express()

// configurar handlebar para assimilar o uso de partials
const hbs = exphbs.create({
    partialsDir : ['views/partials'],
})

// definimos handlebars como template engine
app.engine('handlebars', hbs.engine)
// colocamos outro atributo, view engine como handlebars
app.set('view engine', 'handlebars')

// criando view de post
app.get('/post', (req, res) => {

    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node JS...',
        comments: 4
    }

    res.render('blogpost', {post})
})

// criando view blog para usar minitemplate
app.get('/blog', (req, res) => {

    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender Node JS...',
            comments: 4
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar a aprender PHP...',
            comments: 4
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Este artigo vai te ajudar a aprender Python...',
            comments: 4
        }
    ]

    res.render('blog', {posts})
})

//criando view de dashboard
app.get('/dashboard', (req, res) => {

    const items = ["Item a", "Item b", "Item c"]

    res.render('dashboard', {items})
})

// vamos usar render como resposta para renderizar a view
app.get('/', (req, res) => {

    const user = {
        name: 'Mateus',
        surname: 'Marques',
        age: 19
    }

    const auth = false

    const approved = false

    res.render('home', {user:user, auth, approved})

})

//
app.listen(3000, () => {
    console.log('App funcionando!')
})