import { FileFiltes } from './fileFilters';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FileFilterModel {

    public filters: FileFiltes
    public sortingMode: number
    public sortingColumn: string
    public pageIndex: number
    public itemsPage: number

    constructor() { }
    }