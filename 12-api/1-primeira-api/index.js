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
app.get('/', (req, res)=> {

    res.json({message: 'Primeira rota criada com sucesso!'})

})

// app abrir na porta 3000
app.listen(3000)