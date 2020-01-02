export class FileModel {

constructor(public id: string,
    public name: string,
    public size: number,
    public uploadedTime: number,
    public allowedAnonymous: boolean) { }
}