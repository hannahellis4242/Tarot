import express from "express";
import router from "./handler";
import readLine from "readline";
import cors from "cors";
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

const getCorsURL = (d: string): string => {
  if (process.env.CORS_URL) {
    return process.env.CORS_URL;
  }
  return d;
};

const port = getPort(5001);
const host = "0.0.0.0";
const app = express();
app.use(express.json());
const corsOptions = {
  origin: getCorsURL("http://localhost:3000"),
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use("/", router);
app.use("/random", cors(corsOptions), randomRouter);

app.listen(port, host, () => {
  console.log(`listening at http://${host}:${port}`);
});
