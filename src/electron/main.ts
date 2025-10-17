import { app, BrowserWindow } from 'electron'
import path from 'path'
  
function createWindow(){
  const win: BrowserWindow = new BrowserWindow({
    width: 600,
    height: 1000,
    // transparent: true,
    // frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
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