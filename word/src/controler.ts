import { RequestHandler } from "express";

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
    res.status(500).json({ err: true, message: "no word to add" });
  }
};

export const getWord: RequestHandler = (req, res) => {
  if ("index" in req.body) {
    const { index } = req.body as { index: number };
    if (index >= 0 && index < words.length) {
      res.status(201).json({ word: words[index] });
    } else {
      res.status(500).json({ err: true, message: "out of range" });
    }
  }
};

export const removeWord: RequestHandler = (req, res) => {
  if ("word" in req.body) {
    const { word } = req.body as { word: string };
    words = words.filter((value) => value !== word);
    res.status(201).json({ mesage: "removed", word });
  } else {
    res.status(500).json({ err: true, message: "no word given to remove" });
  }
};
