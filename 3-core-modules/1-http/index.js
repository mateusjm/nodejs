const http = require('http')

const port = 3000

// req = requisition e res = response
const server = http.createServer((req, res) => {
    res.write('Hello, who are you?')
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})