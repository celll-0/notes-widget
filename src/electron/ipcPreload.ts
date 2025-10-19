const { contextBridge, ipcRenderer } = require('electron')

window.electron = {
  quitApp: () => ipcRenderer.send('quit-app'),
}