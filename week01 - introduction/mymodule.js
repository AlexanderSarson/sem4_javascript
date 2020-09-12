const fs = require('fs')

module.exports = function(dir, fileExtension, callback) {
   return fs.readdir(dir, (err, files) => {
     if (err) return callback(err)
     else callback(null, files.filter(file => file.endsWith(`.${fileExtension}`)))
   })
}