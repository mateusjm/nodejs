// externo
const minimist = require('minimist')

// interno
const descricao = require('./descricao').descricao
const args = minimist(process.argv.slice(2))

const nome = args['nome']
const profissao = args['profissao']

descricao(nome, profissao)