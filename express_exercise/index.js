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

app.get("/users", (req, res) => {
  res.send(genmateD);
});

app.get("/users/:id", (req, res) => {
  const currentPath = req.path; //Get current path.
  const userId = req.params.id; //Get id from currentPath.
  const targetId = Number(userId); //Convert id to number, because id always a string.

  console.log(`Path: ${currentPath}, User ID: ${userId}`);

  const targetUser = genmateD.find((item) => item.jsd_number === targetId); //Find Genmate D object that jsd_number = targetId.

  if (!targetUser) {
    return res.status(404).send(`User ${userId} not found!`); //If not found -> return error.
  }

  res.send(targetUser); //If found -> return found Genmate D object.
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
