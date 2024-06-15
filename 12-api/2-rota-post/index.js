// importando express
const express = require('express')
const app = express()

// ler a requisição em JSON
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rotas - endpoints
app.post('/createproduct', (req, res)=> {

    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log(price)

    res.json({message: `O produto ${name} foi criado com sucesso!`})

})

app.get('/', (req, res)=> {

    res.json({message: 'Primeira rota criada com sucesso!'})

})

// app abrir na porta 3000
app.listen(3000)