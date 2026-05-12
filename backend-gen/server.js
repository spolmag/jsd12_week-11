const http = require("http");
const port = 3000;
const menu = [
  {
    name: "ข้าวผัด",
    price: 50,
    id: 1,
  },
  {
    name: "ส้มตำ",
    price: 50,
    id: 2,
  },
  {
    name: "เนื้อย่าง",
    price: 50,
    id: 3,
  },
  {
    name: "ซุป",
    price: 50,
    id: 4,
  },
];

const server = http.createServer((req, res) => {
  console.log(`${req.url} ${req.method} ${req.headers}`);
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      res.end("สวัสดีครับ User");
    }
    if (req.url === "/menu") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(menu)); //Convert to JSON
    }
    if (req.url === "/randomMenu") {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      const randomNumber = Math.floor(Math.random() * menu.length);

      res.end(JSON.stringify(menu[randomNumber]));
    }
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
