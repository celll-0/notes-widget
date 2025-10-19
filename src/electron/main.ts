import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
  
function createWindow(){
  const win: BrowserWindow = new BrowserWindow({
    width: 500,
    height: 800,
    transparent: true,
    backgroundMaterial: 'acrylic',
    vibrancy: 'fullscreen-ui',    // on MacOS
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.ts'),
    },
    x: 1900,
    y: 250,
  })

  win.loadFile(path.join(app.getAppPath(), '../renderer', 'index.html'))
}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
})