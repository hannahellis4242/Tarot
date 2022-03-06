import Option from "./Option";
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
      host: "localhost",
      port: 5000,
    });

    //add word sever
    this.info.push({
      name: "word",
      host: "localhost",
      port: 5001,
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
