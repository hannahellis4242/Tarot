import { app, BrowserWindow } from "electron";

app.on("ready", () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  }); // and load the index.html of the app.
  //win.loadFile("./index.html");
  win.loadURL("http://localhost:3000");
});
