var fs = require('fs')
buf = fs.readFileSync(process.argv[2], 'utf8')

num_newlines = buf.split('\n').length - 1

console.log(num_newlines)
