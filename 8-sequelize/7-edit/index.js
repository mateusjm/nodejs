// importação pacotes 
const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

// models
const User = require('./models/User')

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

// rota get criar página adduser
app.get('/users/create', (req,res)=> {
    res.render('adduser')
})

// inserir usuário
app.post('/users/create', async (req,res)=> {

    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    console.log(req.body)

    await User.create({name, occupation, newsletter})

    res.redirect('/')
})

// criando uma url dinâmica que aceita id pela url
app.get('/users/:id', async (req, res)=> {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where : {id: id}})

    res.render('userview', {user})
})

// excluir usuário
app.post('/users/delete/:id', async (req,res)=> {
    const id = req.params.id

    await User.destroy({raw: true, where: {id: id}})

    res.redirect('/')
})

// renderizar rota useredit
app.get('/users/edit/:id', async (req, res)=> {

    const id = req.params.id

    const user = await User.findOne({ raw: true, where : {id: id}})

    res.render('useredit', {user})
})

// rota home
app.get('/', async (req, res)=> {

    const users = await User.findAll({raw: true})

    console.log(users)

    res.render('home', {users})
})

conn.sync().then(()=> {
   app.listen(3000)
}).catch((err)=> {
    console.log(err)
})

