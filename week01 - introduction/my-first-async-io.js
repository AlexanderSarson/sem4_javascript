const fs = require('fs')

if (process.argv[2]) {
  file = fs.readFile(process.argv[2],"utf8", printNewLines)
}

function printNewLines(err, file){
  console.log(file.split("\n").length - 1) 
}