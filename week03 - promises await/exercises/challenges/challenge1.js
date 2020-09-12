const fs = require("fs");

// fs.readFile("challengeText,txt", "utf8", function(err, content) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(content);
// });

function readFileP(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", function(err, content) {
      if (err) reject(err);
      resolve(content);
    });
  });
}

readFileP("challengeText.txt")
  .then(content => console.log(content))
  .catch(err => console.log("this is my error", err));
