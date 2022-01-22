import express from "express";
import router from "./handler";
import readLine from "readline";
import { createReadStream } from "fs";
import { addWordDirect } from "./controler";
import randomRouter from "./RandomHandler";

const getWordFileName = () => {
  if (process.env.WORD_FILE) {
    return process.env.WORD_FILE;
  }
  return "uniqueFilteredWordList.txt";
};

const reader = readLine.createInterface(createReadStream(getWordFileName()));

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
const host = "0.0.0.0";
const app = express();
app.use(express.json());
app.use("/", router);
app.use("/random", randomRouter);

app.listen(port, host, () => {
  console.log(`listening at http://${host}:${port}`);
});
