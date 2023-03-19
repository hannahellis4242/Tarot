import express from "express";
import morgan from "morgan";
import cors from "cors";
import { handleRequest, getHelp } from "./handler";

const getPort = (d: number): number => {
  if (process.env.PORT) {
    return Number(process.env.PORT);
  }
  return d;
};

const host = "0.0.0.0";
const port = getPort(5000);
const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.get("/deck", cors(), handleRequest);
app.get("/", cors(), getHelp);

app.listen(port, host, () => {
  console.log(`listening on http://${host}:${port}`);
});
