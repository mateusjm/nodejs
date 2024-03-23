const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {name: 'nome', message: 'Qual seu nome?'},
    {name: 'idade', message: 'Qual sua idade?'}
])
.then((answers) => {
    if(!answers.nome || !answers.idade) {
        throw new Error('Idade e nome são obrigatórios!')
    }

    console.log(chalk.green(`Sua nome é: ${answers.nome}`))
    console.log(chalk.yellow(`Sua idade é: ${answers.idade}`))
})
.catch(err => console.log(err))