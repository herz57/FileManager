import { FileHistoryModel } from './fileHistoryModel';

export class FileHistoryResponseModel {

    constructor(public fileHistoryLength: number,
                public history: FileHistoryModel[]) { 
        }
    }