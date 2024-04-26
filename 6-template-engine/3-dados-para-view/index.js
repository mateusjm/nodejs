// importamos os pacotes
const express = require('express')
const exphbs = require('express-handlebars')

// definimos express como app
const app = express()

// definimos handlebars como template engine
app.engine('handlebars', exphbs.engine())
// colocamos outro atributo, view engine como handlebars
app.set('view engine', 'handlebars')

// vamos usar render como resposta para renderizar a view
app.get('/', (req, res) => {

    const user = {
        name: 'Mateus',
        surname: 'Marques',
        age: 19
    }

    const user2 = {
        name: 'Raissa',
        surname: 'Marques',
        age: 21
    }

    res.render('home', {user:user, user2})

})

//
app.listen(3000, () => {
    console.log('App funcionando!')
})