import express from "express";
import axios, { AxiosResponse } from "axios";

const port = 8000;
const app = express();

interface RequestBody {
  seed: string;
}

interface index {
  num: number;
  reversed: boolean;
}

interface ResponceBodySuccess {
  seed: string;
  time: number;
  deck: index[];
}

interface ResponceBodyError {
  time: number;
  err: string;
}

type ResponceBody = ResponceBodySuccess | ResponceBodyError;

app.get("/", (req, res) => {
  /*res.send("Hello World!");*/
  console.log("here");
  axios
    .get<RequestBody, AxiosResponse<ResponceBody>, RequestBody>(
      "http://localhost:5000/deck",
      {
        data: { seed: "Hello world" },
      }
    )
    .then((value) => {
      console.log(JSON.stringify(value.data));
      if ("err" in value.data) {
        console.log("error :", value.data.err);
        res.status(200).send("Error");
      } else {
        console.log("result : ", JSON.stringify(value.data));
        res.status(200).send(JSON.stringify(value.data.deck));
      }
    })
    .catch((reason) => {
      console.log("catch : ");
      res.status(200).send(JSON.stringify(reason));
    });
});

app.listen(port, "localhost", () => {
  console.log(`listening at http://localhost:${port}`);
});
