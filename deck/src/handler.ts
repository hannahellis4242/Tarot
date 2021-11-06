import { RequestHandler } from "express";
import random from "random";
import seedrandom from "seedrandom";
import { createDeck, index, shuffle } from "./deck";

interface RequestBody {
  seed: string;
}
class ResponceBodySuccess {
  time: number;
  deck: index[];
  constructor(public seed: string) {
    this.time = Date.now();
    this.deck = shuffle(createDeck(), random.clone(seedrandom(seed)));
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
    return new ResponceBodySuccess(body.seed);
  } else {
    return new ResponceBodyError("no seed");
  }
};

export const handleRequest: RequestHandler = (req, res) => {
  //console.log(req.body);
  if ("seed" in req.body) {
    res.status(200);
  } else {
    res.status(500);
  }
  res.send(createResponceBody(req.body));
};