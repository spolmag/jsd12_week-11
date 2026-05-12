const http = require("http");
const port = 3000;
const genmateD = [
  {
    name: "โอ้",
    jsd_number: 15,
    genmate: "D",
  },
  {
    name: "แม็ค",
    jsd_number: 21,
    genmate: "D",
  },
  {
    name: "ปาล์ม",
    jsd_number: 24,
    genmate: "D",
  },
  {
    name: "ต่าย",
    jsd_number: 33,
    genmate: "D",
  },
  {
    name: "กิฟ",
    jsd_number: 34,
    genmate: "D",
  },
  {
    name: "แวว",
    jsd_number: 43,
    genmate: "D",
  },
];

const server = http.createServer((req, res) => {
  console.log(`${req.url} ${req.method} ${req.headers}`);
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      res.end("สวัสดีครับ User");
    }
    if (req.url === "/users") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(genmateD)); //Convert to JSON
    }
    if (req.url === "/randomgenmate") {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      const randomNumber = Math.floor(Math.random() * genmateD.length);

      res.end(JSON.stringify(genmateD[randomNumber]));
    }
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
