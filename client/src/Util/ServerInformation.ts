import Option from "./Option";
interface ServerInfo {
  name: string;
  host: string;
  port: number;
}

type mode = "local" | "docker";

export default class ServerInformation {
  info: ServerInfo[];
  constructor(m: mode) {
    this.info = [];
    //add web - thats us

    this.info.push({
      name: "web",
      host: "0.0.0.0",
      port: 3000,
    });
    if (m === "local") {
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
    if (m === "docker") {
      //add deck sever
      this.info.push({
        name: "deck",
        host: "deck",
        port: 5000,
      });
      //add word sever
      this.info.push({
        name: "word",
        host: "word",
        port: 5001,
      });
    }
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
