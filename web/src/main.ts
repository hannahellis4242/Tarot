import axios, { AxiosResponse } from "axios";
import express from "express";
import path from "path";
import morgan from "morgan";
import ServerInformation from "./ServerInformation";

const serverInfo = new ServerInformation();

const web = serverInfo.get("web").unwrap();
const deckServer = serverInfo.get("deck").unwrap();
const wordServer = serverInfo.get("word").unwrap();

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (_, res) => {
  res.render("pages/index", { title: "Tarot" });
});

app.get("/index", (_, res) => {
  res.render("pages/index", { title: "Tarot" });
});

app.get("/instructions", (_, res) => {
  res.render("pages/instructions", { title: "Instructions" });
});

app.get("/tarot", (_, res) => {
  res.render("pages/tarot", { title: "Tarot" });
});

app.get("/deck-generator", (_, res) => {
  res.render("pages/deck-generator", { title: "Deck Input" });
});

app.get("/deck", (req, res) => {
  axios
    .get(
      "http://" + deckServer.host + ":" + deckServer.port.toString() + "/deck",
      {
        params: { seed: req.query.seed, draw: req.query.draw },
      }
    )
    .then((value) => {
      if ("err" in value.data) {
        console.log("error :", value.data.err);
        res.status(200).send("Error");
      } else {
        res.render("pages/deck-result", { title: "Cards", cards: value.data });
        //res.status(200).json(value.data);
      }
    })
    .catch((reason) => {
      console.log("catch : ", reason);
      res.status(200).send(JSON.stringify(reason));
    });
});

app.get("/word", (req, res) => {
  axios
    .get(
      "http://" +
        wordServer.host +
        ":" +
        wordServer.port.toString() +
        "/random",
      {
        params: { num: 100 },
      }
    )
    .then((value) => {
      if ("err" in value.data) {
        console.log("error :", value.data.err);
        res.status(200).send("Error");
      } else {
        const chunks: string[][] = [];
        const rows = 20;
        const cols = 5;
        for (let i = 0; i < rows; ++i) {
          const chunk: string[] = [];
          for (let j = 0; j < cols; ++j) {
            chunk.push(value.data.words[i * cols + j]);
          }
          chunks.push(chunk);
        }
        res.render("pages/seed-word", { title: "word seed", rows: chunks });
      }
    })
    .catch((reason) => {
      console.log("catch : ", reason);
      res.status(200).json(reason);
    });
});

app.listen(web.port, web.host, () => {
  console.log(`listening at http://${web.host}:${web.port}`);
});
