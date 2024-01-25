 //CommonnJS, every file is a module(by default)
 //Modules - Encapsulated code(only share minimum)

const names = require('./4-names') //Exporting the objects
const sayHi = require('./5-utils') //exporting as a function
const data = require('./6-alternative-flavor')
console.log(data)
require('./7-mind-gernade')
// sayHi(names.poojitha)
// sayHi(names.sreedhar)
// sayHi('pradeep')
