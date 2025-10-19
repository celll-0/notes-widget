import { IpcMainEvent, app } from "electron";


export interface IIpcRequest {
    responseChannel?: string,
    parems?: string[],
}

export interface IIpcChannel {
    getName(): string,
    handle(event: IpcMainEvent, request: IIpcRequest): void
}

export class QuitIpcChannel implements IIpcChannel {
    private name: string = "quit-app";

    public getName(): string {
        return this.name;
    }

    public handle(event: IpcMainEvent, request: IIpcRequest): void {
        app.quit()
    }

}