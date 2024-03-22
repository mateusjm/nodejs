const chalk = require('chalk')
const minimist = require('minimist')

//const resultado = require('./resultado').resultado
const resultado = {
    resultado(nota) {
        if(nota >=7) {
        console.log(chalk.green('Você está aprovado. Parabéns!'))
        } else {
        console.log(chalk.red('Você foi reprovado. Tente novamente!'))
        }
    }
}

const args = minimist(process.argv.slice(2))

const nota = parseInt(args['nota'])

resultado.resultado(nota)