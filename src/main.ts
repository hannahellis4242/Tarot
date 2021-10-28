import { app, BrowserWindow } from "electron";

let win: BrowserWindow | null = null;
let createWindow = () => {
  win = new BrowserWindow();
  win.maximize();
  win.on("close", () => {
    win = null;
  });
};

app.whenReady().then(createWindow);
