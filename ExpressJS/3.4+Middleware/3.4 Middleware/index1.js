import express from "express";
import  {dirname}  from "path";
import { fileURLToPath } from "url";
import bodyParser  from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true}));

app.post("/submit", (req, res) => {
  console.log(req.body);
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});