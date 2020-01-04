import { FileModel } from './fileModel';

export class FilesResponseModel {

    constructor(public userFilesLength: number,
                public files: FileModel[]) { 
        }
    }