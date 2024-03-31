const fs = require('fs')

fs.stat('pasta', (err,stats) => {
    if(err) {
        console.log(err)
        return
    }

    console.log(stats.isFile()) //Arquivo
    console.log(stats.isDirectory()) // Diretório
    console.log(stats.isSymbolicLink()) // Link Simbólico para o arquivo, atalho
    console.log(stats.ctime) // Data de criação
    console.log(stats.size) // Tamanho do arquivo

})