import { RequestHandler } from "express";
import random from "random";
import seedrandom from "seedrandom";
import { createDeck, index, shuffle } from "./deck";

const helpStr = ["/deck/?seed=<value>", "/deck/?seed=<value>&draw=<number>"];

interface RequestBody {
  seed: string;
  draw?: number;
}
class ResponseBodySuccess {
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

class ResponseBodyError {
  time: number;
  constructor(public err: string, public usage: string[]) {
    this.time = Date.now();
  }
}

type ResponseBody = ResponseBodySuccess | ResponseBodyError;

const createResponseBody = (body: RequestBody): ResponseBody => {
  return new ResponseBodySuccess(body.seed, body.draw);
};

export const handleRequest: RequestHandler = (req, res) => {
  if (req.query.seed) {
    const seed: string = req.query.seed.toString();
    res.status(200);
    if (req.query.draw) {
      const draw: number = Number(req.query.draw.toString());
      res.send(createResponseBody({ seed, draw }));
    } else {
      res.send(createResponseBody({ seed }));
    }
  } else {
    res.status(400).send(new ResponseBodyError("no seed", helpStr));
  }
};
