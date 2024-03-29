import express from "express";
import path from "path";
import morgan from "morgan";

const web = { host: "0.0.0.0", port: 80 };

const app = express();
app.use(express.json());
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "../public")));

app.listen(web.port, web.host, () => {
  console.log(`listening at http://${web.host}:${web.port}`);
});
