const _ = require('lodash')

const a = Array(1, 2, 3, 4, 5)
const b = Array(2, 4, 6, 7, 8)

const diff = _.difference(a, b)

console.log(diff)
