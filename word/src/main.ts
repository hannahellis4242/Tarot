import express, { json } from "express";
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

const port = 5002;
const host = "0.0.0.0";
const app = express();
app.use(json());

app.use("/", router);
app.use("/random", randomRouter);

app.listen(port, host, () => {
  console.log(`listening at http://${host}:${port}`);
});
