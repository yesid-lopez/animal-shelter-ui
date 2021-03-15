import * as jsonServer from 'json-server';

export class JsonServerHandler {
    private _jsonServer: any;
    private _httpServer: any;
    private _lastSocketKey: number;
    private _socketMap: Array<any>;

    constructor() {
        this._jsonServer = jsonServer.create();
        this._jsonServer.use(jsonServer.defaults());
        this._lastSocketKey = 0;
        this._socketMap = [];
    }

    public closeListener(): void {
        this.endServer();
        this._httpServer.close(function () {
            console.log('Json Server is closed');
        });
    }

    public setListener(): void {
        this._httpServer = this._jsonServer.listen(8080, () => {
            console.log('Json server is running');
        });
        this.attachSocketEvents();
    }

    private attachSocketEvents(): void {
        this._httpServer.on('connection', socket => {
            const socketKey = ++this._lastSocketKey;
            this._socketMap[socketKey] = socket;
            socket.on('close', () => {
                delete this._socketMap[socketKey];
            });
        })
    }

    private endServer(): void {
        Object.keys(this._socketMap).forEach(socketKey => {
            this._socketMap[socketKey].destroy();
        });
    }

    public get jsonServer(): any {
        return this._jsonServer;
    }
}