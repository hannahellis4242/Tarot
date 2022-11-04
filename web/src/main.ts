import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const getServerInfo = (name: string, defaultPort: number) => {
  const hostEnv = process.env[`${name}-host`];
  const portEnv = process.env[`${name}-port`];
  return {
    host: hostEnv || "localhost",
    port: portEnv || defaultPort.toString(),
  };
};

const app = express();
const home = getServerInfo("home", 3001);
const client = getServerInfo("client", 3000);
const deck = getServerInfo("deck", 5001);
const word = getServerInfo("word", 5002);

app.use(
  "/deck",
  createProxyMiddleware({
    target: `http://${deck.host}:${deck.port}`,
    pathRewrite: { "/deck": "" },
  })
);
app.use(
  "/word",
  createProxyMiddleware({
    target: `http://${word.host}:${word.port}`,
    pathRewrite: { "/word": "" },
  })
);
/*
app.use(
  "/tarot",
  createProxyMiddleware({
    target: `http://${client.host}:${client.port}`,
    pathRewrite: { "/tarot": "" },
  })
);*/
app.use(
  "/",
  createProxyMiddleware({ target: `http://${client.host}:${client.port}` })
);
app.listen(8080, "0.0.0.0", () => {
  console.log("web server started on port 8080");
});
