const lodash = require('lodash')

const items = [1,[2,[3]]]

const newitems = lodash.flatMapDeep(items)

console.log(newitems)