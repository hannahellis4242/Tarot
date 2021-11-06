import express from "express";
import { handleRequest } from "./handler";

const port = 3000;
const app = express();
app.use(express.json());

app.get("/deck", handleRequest);

app.listen(port, "localhost", () => {
  console.log(`listening at http://localhost:${port}`);
});
