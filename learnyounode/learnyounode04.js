var fs = require('fs')
num_newlines = 0
buf = fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (!err) {
        num_newlines = data.split('\n').length - 1
        console.log(num_newlines)
    }      
})

