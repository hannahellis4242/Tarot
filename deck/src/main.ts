import express from "express";
import { handleRequest } from "./handler";
import { readFile } from "fs";
import { exit } from "process";

const getPort = (d: number): number => {
  if (process.env.PORT) {
    return Number(process.env.PORT);
  }
  return d;
};

readFile("lookup.json", (err, data) => {
  if (err) {
    console.log(err);
    exit(1);
  }
  const port = getPort(5000);
  const app = express();
  app.use(express.json());
  app.get("/", handleRequest(JSON.parse(data.toString())));

  app.listen(port, "localhost", () => {
    console.log(`listening at http://localhost:${port}`);
  });
});
