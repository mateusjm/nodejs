// já de maneira assíncrona, o código ocorre em paralelo ao principal
const fs = require('fs')

console.log('Início')

// 'Inicio' é executado, depois o 'Fim' e aí o arquivo aparece como 'criado'
fs.writeFile('arquivo.txt', 'oi', function(err) {
    setTimeout(function() {
        console.log('Arquivo criado!')
    }, 1000)
})

console.log('Fim')