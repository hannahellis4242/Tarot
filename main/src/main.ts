import express from "express";
import axios, { AxiosResponse } from "axios";
import { RequestBody, ResponseBody } from "./interfaces";
import path from "path";

const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/deck", (req, res) => {
  axios
    .get<RequestBody, AxiosResponse<ResponseBody>, RequestBody>(
      "http://localhost:5000",
      {
        data: { seed: "Hello world" },
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
