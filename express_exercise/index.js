const express = require("express");
const port = 3000;
const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
const app = express();
const cors = require("cors");
app.use(cors());
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

app.get("/", (req, res) => {
  res.send("Hello");
});

//app.get("/users", async (req, res) => {
//const response = await fetch(API_URL);
//const data = await response.json();
//res.send(data);
//});

app.get("/users", (req, res) => {
  res.send(genmateD);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
