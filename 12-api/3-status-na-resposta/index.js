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

    if(!name) {
        res.status(422).json({message: 'O campo nome é obrigatório!'})
    }

    console.log(name)
    console.log(price)

    // mandando mensagem com status JSON
    res.status(201).json({message: `O produto ${name} foi criado com sucesso!`})

})

app.get('/', (req, res)=> {

    res.status(200).json({message: 'Primeira rota criada com sucesso!'})

})

// app abrir na porta 3000
app.listen(3000)