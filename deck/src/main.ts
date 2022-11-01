import express from "express";
import { handleRequest } from "./handler";

const host = "0.0.0.0";
const port = 5001;
const app = express();

app.use(express.json());
app.get("/", handleRequest);

app.listen(port, host, () => {
  console.log(`listening at http://${host}:${port}`);
});
