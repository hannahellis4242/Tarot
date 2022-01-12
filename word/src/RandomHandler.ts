import { Router } from "express";
import { getRandom } from "./controler";

const randomRouter = Router();

randomRouter.get("/", getRandom);

export default randomRouter;
