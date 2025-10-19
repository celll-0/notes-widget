import { IElectronAPI } from '../../declarations/interface';


export default class WindowOperations {
    private ipcRenderer?: IElectronAPI;

    public quit() {
        if (!this.ipcRenderer){
            this.ipcRenderer = this.initRenderer();
        }
        
        const ipcRenderer = this.ipcRenderer;
        const res = ipcRenderer.quitApp();
    }
    
    private initRenderer(): IElectronAPI {
        if (!window || !window.process || !window.require) {
            throw new Error(`Unable to require renderer process`);
        }
        return window.electron;
    }
}