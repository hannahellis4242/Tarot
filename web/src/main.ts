import axios, { AxiosResponse } from "axios";
import express from "express";
import path from "path";
import morgan from "morgan";

const getPort = (d: number): number => {
  if (process.env.PORT) {
    return Number(process.env.PORT);
  }
  return d;
};

const getDeckHost = (): string => {
  if (process.env.DECK_HOST) {
    return process.env.DECK_HOST;
  }
  return "localhost";
};

const getDeckPort = (): number => {
  if (process.env.DECK_PORT) {
    return Number(process.env.DECK_PORT);
  }
  return 5000;
};

const host = "0.0.0.0";
const port = getPort(3000);
const deckHost = getDeckHost();
const deckPort = getDeckPort();
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
    .get("http://" + deckHost + ":" + deckPort.toString() + "/deck", {
      params: { seed: req.query.seed, draw: req.query.draw },
    })
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

app.listen(port, host, () => {
  console.log(`listening at http://${host}:${port}`);
});
