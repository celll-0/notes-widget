import { app, BrowserWindow, ipcMain } from 'electron'
import type { BrowserWindowConstructorOptions } from 'electron'
import { IIpcChannel, QuitIpcChannel } from '../ipc/ipcChannel'
import path from 'path'

class Main {
  
  public initialise(ipcChannels: IIpcChannel[]): void {
    const browserOptions: BrowserWindowConstructorOptions = {
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.join(__dirname, 'ipcPreload.ts'),
    }}

    app.whenReady().then(() => {
      this.registerIpcChannels(ipcChannels)
      this.createWindow(browserOptions)
      
      app.on('activate', () => this.createWindowOnActivate(browserOptions))
      app.on('window-all-closed', this.quitOnAllWindowsClosed)
    })
  }
  
  private createWindow(browserOpts: BrowserWindowConstructorOptions): void {
    const win: BrowserWindow = new BrowserWindow({
      width: 500,
      height: 800,
      transparent: true,
      backgroundMaterial: 'acrylic',
      vibrancy: 'fullscreen-ui',    // on MacOS
      frame: false,
      x: 1900,
      y: 250,
      ...browserOpts
    })
    
    win.loadFile(path.join(app.getAppPath(), '../renderer', 'index.html'))
  }

  private registerIpcChannels(ipcChannels: IIpcChannel[]): void {
    ipcChannels.forEach(channel => ipcMain.on(channel.getName(), (event, request) => channel.handle(event, request)))
  }

  private createWindowOnActivate(browserOptions: BrowserWindowConstructorOptions): void {
    if(BrowserWindow.getAllWindows().length === 0) this.createWindow(browserOptions);
  }

  private quitOnAllWindowsClosed(): void {
    if(process.platform !== 'darwin') app.quit();
  }
}

(new Main()).initialise([
  new QuitIpcChannel()
])