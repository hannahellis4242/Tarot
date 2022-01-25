import getProperty from "./utils/getProperty";
import Option from "./utils/Option";

interface ServerInfo {
  name: string;
  host: string;
  port: number;
}

const getPort = (name: string): Option<number> => {
  return new Option(getProperty(process.env, name)).map((x) => Number(x));
};

const getHost = (name: string): Option<string> => {
  return new Option(getProperty(process.env, name));
};

export default class ServerInformation {
  info: ServerInfo[];
  constructor() {
    this.info = [];
    //add web - thats us
    this.info.push({
      name: "web",
      host: "0.0.0.0",
      port: getPort("PORT").unwrap_or(3000),
    });
    //add deck sever
    this.info.push({
      name: "deck",
      host: getHost("DECK_HOST").unwrap_or("localhost"),
      port: getPort("DECK_PORT").unwrap_or(5000),
    });
    //add word sever
    this.info.push({
      name: "word",
      host: getHost("WORD_HOST").unwrap_or("localhost"),
      port: getPort("WORD_PORT").unwrap_or(5001),
    });
  }

  getHost(x: string) {
    return new Option(this.info.find(({ name }) => x == name));
  }

  getPort(x: string) {
    return new Option(this.info.find(({ name }) => x == name));
  }

  get(x: string): Option<{ host: string; port: number }> {
    return new Option(this.info.find(({ name }) => x == name));
  }
}
