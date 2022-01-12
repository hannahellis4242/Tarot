import express from "express";
import axios, { AxiosResponse } from "axios";
import {
  DeckRequestBody,
  DeckResponseBody,
  WordRequestBody,
} from "./interfaces";
import path from "path";

const port = 8000;
const deckPort = 5000;
const wordPort = 5001;
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/deck/:seed", (req, res) => {
  axios
    .get<DeckRequestBody, AxiosResponse<DeckResponseBody>, DeckRequestBody>(
      "http://localhost:" + deckPort.toString(),
      {
        data: { seed: req.params.seed },
      }
    )
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

app.get("/words", (req, res) => {
  axios
    .get<WordRequestBody, AxiosResponse<DeckResponseBody>, WordRequestBody>(
      "http://localhost:" + wordPort.toString() + "/random",
      {
        data: { num: 100 },
      }
    )
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

app.listen(port, "localhost", () => {
  console.log(`listening at http://localhost:${port}`);
});
