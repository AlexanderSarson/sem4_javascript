// c
function makeSecureRandom(size) {
  return new Promise((resolve, reject) => {
    require("crypto").randomBytes(size, function(err, buffer) {
      if (err) return reject(new Error("something went wrong"));
      let secureHex = buffer.toString("hex");
      const object = {
        length: size,
        random: `A string with ${size} random hex-characters`,
        secureHex: secureHex
      };
      return resolve(object);
    });
  });
}

module.exports = makeSecureRandom;
