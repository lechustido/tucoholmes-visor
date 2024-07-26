export class SavedIssueData{
    public video!: VideoModel;
    public consoleError!: Array<ConsoleData>;
    public consoleLogs!:  Array<ConsoleData>;
    public requests!: Array<any>;
    public localStorage!:string;
}

export class VideoModel{
    public base64!:string;
    public timer!:number;
}

export class ConsoleData{
    public error!:string;
    public timer!:number;
}