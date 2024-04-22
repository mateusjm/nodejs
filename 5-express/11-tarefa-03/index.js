const express = require('express')
// app executa express
const app = express()
// porta para o servidor
const port = 5000
// arquivo projects = rotas
const projectsRoutes = require('./projects')

//possibilidade de arquivos estáticos (css)
app.use(express.static('public'))

//implementar router no projeto // url da página
app.use('/projects', projectsRoutes)

// verificar execução do servidor com listen
app.listen( port, () => {
    console.log(`O servidor está rodando na porta: ${port}`)
})