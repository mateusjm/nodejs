// importamos os pacotes
const express =require('express')
const exphbs = require('express-handlebars')

// definimos express como app
const app = express()

// definimos handlebars como template engine
app.engine('handlebars', exphbs.engine())
// colocamos outro atributo, view engine como handlebars
app.set('view engine', 'handlebars')

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