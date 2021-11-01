import { app, BrowserWindow } from "electron";
import path from "path";

let win: BrowserWindow | null = null;
let createWindow = () => {
  win = new BrowserWindow({ show: false });
  win.on("close", () => {
    win = null;
  });
  win.loadFile(path.join(__dirname, "../../render/index.html"));
  //win.webContents.openDevTools();
  win.webContents.on("dom-ready", () => {
    if (win) {
      win.maximize();
      win.show();
    }
  });
};

app.whenReady().then(createWindow);
