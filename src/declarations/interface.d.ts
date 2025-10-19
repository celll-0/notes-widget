export interface IElectronAPI {
  quitApp: () => void,
}

declare global {
  interface Window {
    electron: IElectronAPI
  }
}