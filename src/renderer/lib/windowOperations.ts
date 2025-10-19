import { IpcRenderer } from 'electron';


export default class IpcService {
    private ipcRenderer?: IpcRenderer;

    public send(channel: string, data: any): void {
        if (!this.ipcRenderer){
            this.ipcRenderer = this.initRenderer();
        }
        
        const ipcRenderer = this.ipcRenderer;
        ipcRenderer.send(channel, data);
    }

    private initRenderer(): IpcRenderer{
        if (!window || !window.process || !window.require) {
            throw new Error(`Unable to require renderer process`);
        }
        return window.require('electron').ipcRenderer;
    }
}