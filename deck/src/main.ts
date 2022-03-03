import express from "express";
import morgan from "morgan";
import cors from "cors";
import { handleRequest, handleRequestQuery } from "./handler";

const getPort = (d: number): number => {
  if (process.env.PORT) {
    return Number(process.env.PORT);
  }
  return d;
};

const host = "0.0.0.0";
const port = getPort(5000);
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(morgan("combined"));
app.get("/", handleRequest);
app.get("/deck", cors(corsOptions), handleRequestQuery);

app.listen(port, host, () => {
  console.log(`listening at http://${host}:${port}`);
});
