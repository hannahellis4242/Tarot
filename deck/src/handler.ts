import { RequestHandler } from "express";
import random from "random";
import seedrandom from "seedrandom";
import { createDeck, index, shuffle } from "./deck";

interface RequestBody {
  seed: string;
  draw?: number;
}
class ResponceBodySuccess {
  time: number;
  deck: index[];
  constructor(public seed: string, draw?: number) {
    this.time = Date.now();
    this.deck = shuffle(createDeck(), random.clone(seedrandom(seed)));
    if (draw) {
      this.deck = this.deck.slice(0, draw);
    }
  }
}

class ResponceBodyError {
  time: number;
  constructor(public err: string) {
    this.time = Date.now();
  }
}

type ResponceBody = ResponceBodySuccess | ResponceBodyError;

const createResponceBody = (body: RequestBody | object): ResponceBody => {
  if ("seed" in body) {
    return new ResponceBodySuccess(body.seed, body.draw);
  } else {
    return new ResponceBodyError("no seed");
  }
};

export const handleRequest: RequestHandler = (req, res) => {
  if ("seed" in req.body) {
    res.status(200);
  } else {
    res.status(500);
  }
  res.send(createResponceBody(req.body));
};
