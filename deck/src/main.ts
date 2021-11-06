import express from "express";
import { handleRequest } from "./handler";

const getPort = (d: number): number => {
  if (process.env.PORT) {
    return Number(process.env.PORT);
  }
  return d;
};

const port = getPort(5000);
const app = express();
app.use(express.json());

app.get("/deck", handleRequest);

app.listen(port, "localhost", () => {
  console.log(`listening at http://localhost:${port}`);
});
