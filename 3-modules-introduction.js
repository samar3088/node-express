//Modules -- Encapsulated code (only share the minumim)
//CommonJS, Every file is called as a module by defualt

const {john,susan} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')
require('./7-mind-grenade')

sayHi(john)

console.log(data)