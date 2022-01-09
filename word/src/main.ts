import express from "express";
import router from "./handler";
import readLine from "readline";
import { createReadStream } from "fs";
import { addWordDirect } from "./controler";

const reader = readLine.createInterface(
  createReadStream("uniqueFilteredWordList.txt")
);
reader.on("line", (line) => {
  addWordDirect(line);
});

const getPort = (d: number): number => {
  if (process.env.PORT) {
    return Number(process.env.PORT);
  }
  return d;
};

const port = getPort(5001);
const app = express();
app.use(express.json());
app.use("/", router);

app.listen(port, "localhost", () => {
  console.log(`listening at http://localhost:${port}`);
});
