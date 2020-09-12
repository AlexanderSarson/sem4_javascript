// a
const crypto = require("crypto");
const getSecureRandoms = require("./ex1-crypto-module");

const callbackImplementation = () => {
  const object = {
    title: "6 Secure Randoms",
    randoms: []
  };
  let SIZE = 48;
  let buffer = "ijsidfsidjfs";
  crypto.randomBytes(SIZE, function(err, buffer) {
    let secureHex = buffer.toString("hex");
    hex = {
      length: SIZE,
      random: `A string with ${SIZE} random hex-characters`
    };
    SIZE -= 8;
    object.randoms.push(hex);
    crypto.randomBytes(SIZE, function(err, buffer) {
      let secureHex = buffer.toString("hex");
      hex = {
        length: SIZE,
        random: `A string with ${SIZE} random hex-characters`
      };
      SIZE -= 8;
      object.randoms.push(hex);
      crypto.randomBytes(SIZE, function(err, buffer) {
        let secureHex = buffer.toString("hex");
        hex = {
          length: SIZE,
          random: `A string with ${SIZE} random hex-characters`
        };
        object.randoms.push(hex);
        console.log(JSON.stringify(object));
      });
    });
  });
};
//callbackImplementation()

// b

// function makeSecureRandom(size){
//   return new Promise((resolve,reject)=>{
//     crypto.randomBytes(size, function(err, buffer) {
//       if(err) return reject(new Error("something went wrong"))
//       let secureHex = buffer.toString('hex');
//       return resolve(secureHex)
//     });
//   })
// }

// d
// const p1 = getSecureRandoms(48)
// const p2 = getSecureRandoms(40)
// const p3 = getSecureRandoms(32)
// const p4 = getSecureRandoms(24)
// const p5 = getSecureRandoms(16)
// const p6 = getSecureRandoms(8)
// const promises = [p1,p2,p3,p4,p5,p6]
// Promise.all(promises).then(data => console.log(data.join(", ")))

const testAsync = async () => {
  const p1 = getSecureRandoms(48);
  const p2 = getSecureRandoms(40);
  const p3 = getSecureRandoms(32);
  const p4 = getSecureRandoms(24);
  const p5 = getSecureRandoms(16);
  const p6 = getSecureRandoms(8);
  const res1 = await p1;
  const res2 = await p2;
  const res3 = await p3;
  const res4 = await p4;
  const res5 = await p5;
  const res6 = await p6;
  console.log(res1, res2, res3, res4, res5, res6);
};

testAsync();
