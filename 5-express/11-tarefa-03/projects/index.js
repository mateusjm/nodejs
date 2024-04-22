const express = require('express')
const router = express.Router()

// puxar os caminhos dos templates
const path = require('path')

// definir basepath, dirname indica o diretório atual
const basepath = path.join(__dirname, '../templates')

// criar rotas
router.get('/', (req, res) => {
    // arquivo da página
    res.sendFile(`${basepath}/projects.html`)
})

// projeto individual acessado pelo uso de um id
router.get('/:id', (req, res) => {
    res.sendFile(`${basepath}/project.html`)
})

module.exports = router