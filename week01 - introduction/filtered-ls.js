const fs = require('fs')

function filterFiles(err, files){
  if (err) return console.error(err)
  for (const file of files) {
    if (file.endsWith(`.${process.argv[3]}`)){
      console.log(file)
    }
  }
}

if ((process.argv[2]) && (process.argv[3]))  {
  file = fs.readdir(process.argv[2], filterFiles)
}