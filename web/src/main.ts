import express from "express";
import { createProxyServer } from "http-proxy";

const getServerInfo = (name: string, defaultPort: number) => {
  const hostEnv = process.env[`${name}-host`];
  const portEnv = process.env[`${name}-port`];
  return {
    host: hostEnv || "localhost",
    port: portEnv || defaultPort.toString(),
  };
};

const app = express();
const client = getServerInfo("client", 3000);
const deck = getServerInfo("deck", 5001);
const word = getServerInfo("word", 5002);

//set up proxy
const proxy = createProxyServer();
app.use("/deck", (req, res, next) => {
  proxy.web(req, res, { target: `http://${deck.host}:${deck.port}` }, next);
});
app.use("/word", (req, res, next) => {
  proxy.web(req, res, { target: `http://${word.host}:${word.port}` }, next);
});
app.use("/", (req, res, next) => {
  proxy.web(req, res, { target: `http://${client.host}:${client.port}` }, next);
});
app.listen(8080, "0.0.0.0", () => {
  console.log("web server started on port 8080");
});
