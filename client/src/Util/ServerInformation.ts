import Option from "./Option";
import config from "../config";

interface ServerInfo {
  name: string;
  host: string;
  port: number;
}

export default class ServerInformation {
  info: ServerInfo[];
  constructor() {
    this.info = [];

    //add web - thats us
    this.info.push({
      name: "web",
      host: "0.0.0.0",
      port: 3000,
    });

    //add deck sever
    this.info.push({
      name: "deck",
      host: config.deck.host,
      port: config.deck.port,
    });

    //add word sever
    this.info.push({
      name: "word",
      host: config.word.host,
      port: config.word.port,
    });
  }

  getHost(x: string) {
    return new Option(this.info.find(({ name }) => x === name));
  }

  getPort(x: string) {
    return new Option(this.info.find(({ name }) => x === name));
  }

  get(x: string): Option<{ host: string; port: number }> {
    return new Option(this.info.find(({ name }) => x === name));
  }
}
