import { Router } from "express";
import { addWord, getWord, removeWord } from "./controler";

const router = Router();

router.post("/", addWord);

router.get("/", getWord);

router.delete("/", removeWord);

export default router;
