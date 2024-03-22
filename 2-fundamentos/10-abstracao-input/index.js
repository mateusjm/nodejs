const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name: 'p1',
            message: 'Qual sua primeira nota?'
        },
        {
            name: 'p2',
            message: 'Qual sua segunda nota?'
    }])
    .then((answers) => {
        console.log(answers)
        const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2

        console.log(`A média entre as notas é ${media}`)
    })
    .catch( err => console.log(err))