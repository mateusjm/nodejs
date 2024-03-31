const path = require('path')

const customPath = '/relatorios/mateus/relatorio1.pdf'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))

const customPath2 = '/relatorios/raissa/relatorio2.txt'

console.log(path.dirname(customPath2))
console.log(path.basename(customPath2))
console.log(path.extname(customPath2))