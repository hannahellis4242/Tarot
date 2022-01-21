import axios, { AxiosResponse } from "axios";
import express from "express";
import path from "path";

const getPort = (d: number): number => {
  if (process.env.PORT) {
    return Number(process.env.PORT);
  }
  return d;
};

const port = getPort(3000);
const deckPort = 5000;
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(port, "localhost", () => {
  console.log(`listening at http://localhost:${port}`);
});

app.get("/deck", (req, res) => {
  axios
    .get("http://localhost:" + deckPort.toString() + "/deck", {
      params: { seed: req.query.seed, draw: req.query.draw },
    })
    .then((value) => {
      if ("err" in value.data) {
        console.log("error :", value.data.err);
        res.status(200).send("Error");
      } else {
        res.status(200).json(value.data);
      }
    })
    .catch((reason) => {
      console.log("catch : ", reason);
      res.status(200).send(JSON.stringify(reason));
    });
});
