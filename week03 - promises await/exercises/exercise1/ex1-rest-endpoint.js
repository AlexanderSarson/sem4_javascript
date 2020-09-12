const http = require("http");
const getSecureRandoms = require("./ex1-crypto-module");

const server = http.createServer((req, res) => {
  if (req.url === "/api/securerandoms") {
    res.setHeader("Content-Type", "application/json");
    const getSecureRandomStrings = async () => {
      const object = {
        title: "6 Secure Randoms",
        randoms: []
      };
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
      object.randoms.push(res1);
      object.randoms.push(res2);
      object.randoms.push(res3);
      object.randoms.push(res4);
      object.randoms.push(res5);
      object.randoms.push(res6);
      res.write(JSON.stringify(object));
      return res.end();
    };
    getSecureRandomStrings();
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on("connection", sock => {
  // You can get the client-IP in here, using sock.remoteAddress)
  console.log(sock.remoteAddress);
});
server.listen(3000);
console.log("listening on 3000");
