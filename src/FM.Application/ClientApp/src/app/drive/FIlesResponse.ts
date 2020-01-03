import { FileModel } from './fileModel';

export class FilesResponse {

    constructor(public userFilesLength: number,
                public files: FileModel[]) { 
        }
    }