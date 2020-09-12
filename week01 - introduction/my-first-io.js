const fs = require('fs')

if (process.argv[2]) {
  file = fs.readFileSync(process.argv[2]).toString().split("\n")
  console.log(file.length - 1) 
}