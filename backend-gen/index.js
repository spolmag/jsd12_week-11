const express = require("express");
const port = 6767;
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

const app = express();
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users", (req, res) => {
  res.send(genmateD); //Express automatical convert to JSON
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
