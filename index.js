const { app, BrowserWindow,ipcMain, Menu, Tray } = require('electron')  
let appIcon = null
let win;
const createWindow = () => {
     win = new BrowserWindow({
      width: 348,
      height: 38,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    },
    frame:false,
    resizeable:false,
    })
  
    win.loadFile('giris.html')

    ipcMain.on("pencere:gizle", () => {
      win.hide();
    });
  }

  app.whenReady().then(() => {
    createWindow()
    appIcon = new Tray('icon.ico')
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Quit',
      click: function() {
        app.quit();
      }
    },
  ])
  appIcon.setToolTip('This is my application.')
  appIcon.setContextMenu(contextMenu)
  appIcon.on("double-click", () => win.show());
  })