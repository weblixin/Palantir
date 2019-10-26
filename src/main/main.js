const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const path = require('path');
const port = require('../../global.config');
let mainWindow;

app.disableHardwareAcceleration();

ipcMain.on('Enter-Home', (event, arg) => {
  mainWindow.close();
  createWindow(arg.width, arg.height);
});

ipcMain.on('close-window', () => {
  app.quit();
});
function createWindow(width, height, event) {
  // Create the browser window.

  mainWindow = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
    frame: true,
  });

  mainWindow.loadURL(`http://localhost:${port}/index.html`);

  mainWindow.on('closed', function() {
    // mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow(300, 420);
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) {
    () => {
      createWindow(300, 420);
    };
  }
});
