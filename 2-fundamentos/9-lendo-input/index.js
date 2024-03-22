// configurações para receber e enviar dados para o usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question(`Qual seu time de futebol favorito? `, (time) => {
    if(time === 'Galo') {
        console.log('Isso nem é time!')
    } else if (time === 'Cruzeiro') {
        console.log('Seu time é cabuloso!')
    } else {
        console.log(`Seu time é ${time}`)
    }

    readline.close() // parar execução

})