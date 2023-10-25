//there are two flavours in fs module
//async and sync
// async mean non blocking code

const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

//writeFileSync('./content/result-sync.txt',`Here is the result: ${first}`)
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}${second}`, {flag:'a'})