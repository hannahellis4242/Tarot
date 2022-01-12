import { RequestHandler } from "express";
import random, { Random } from "random";

let words: string[] = [];

export const addWordDirect = (word: string) => {
  words.push(word);
};

export const addWord: RequestHandler = (req, res) => {
  if ("word" in req.body) {
    const { word } = req.body as { word: string };
    addWordDirect(word);
    res.status(201).json({ message: "Added word", word });
  } else {
    res.status(400).json({ err: true, message: "no word to add" });
  }
};

export const getWord: RequestHandler = (req, res) => {
  if ("index" in req.body) {
    const { index } = req.body as { index: number };
    if (index >= 0 && index < words.length) {
      res.status(200).json({ word: words[index] });
    } else {
      res
        .status(400)
        .json({ err: true, message: "out of range", max: words.length });
    }
  } else {
    res.status(400).json({ err: true, message: "no index requested" });
  }
};

export const removeWord: RequestHandler = (req, res) => {
  if ("word" in req.body) {
    const { word } = req.body as { word: string };
    words = words.filter((value) => value !== word);
    res.status(200).json({ mesage: "removed", word });
  } else {
    res.status(400).json({ err: true, message: "no word given to remove" });
  }
};
const min = <T>(a: T, b: T): T => {
  return a < b ? a : b;
};
const shuffleN = <T>(xs: T[], n: number, rng: Random): T[] => {
  const max = xs.length - 1;
  const stop = min(max, n);
  for (var i = 0; i < stop; ++i) {
    const j = rng.int(i, max);
    const temp = xs[i];
    xs[i] = xs[j];
    xs[j] = temp;
  }
  return xs;
};

export const getRandom: RequestHandler = (req, res) => {
  if ("num" in req.body) {
    const { num } = req.body as { num: number };
    if (num >= 0 && num < words.length) {
      const wordBucket = [...words];
      res.status(200).json({
        words: shuffleN(wordBucket, num, random).slice(0, num).sort(),
      });
    } else {
      res
        .status(400)
        .json({ err: true, message: "out of range", max: words.length });
    }
  } else {
    res.status(400).json({
      err: true,
      message: "please spesify how many random words you require",
    });
  }
};
