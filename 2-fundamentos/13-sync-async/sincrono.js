// dessa forma o node espera o decorrer normal do processo para executar o próximo
const fs = require('fs')

console.log('Início')

// definimos que a criação do arquivo seguiria o processo síncrono
fs.writeFileSync('arquivo.txt', 'oi') 

setTimeout(function() {
    console.log('Fim')
}, 2000)