import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../services/file.service';
import { FileModel } from './fileModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {

  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;

  filesUrl = "http://localhost:5000/api/file/files";
  response: any;
  editedFile: FileModel;
  files: Array<FileModel>;
  statusMessage: string;
  options = {

  }

  constructor(private http: HttpClient,
              private _fileService: FileService) {
    this.files = new Array<FileModel>();
   }

  ngOnInit() {
    this.loadFiles();
  }

  private loadFiles() {
    this._fileService.getFiles(this.options).subscribe((res: FileModel[]) => {
      this.files = res; 
    });
  }

  editFile(file: FileModel) {
    this.editedFile = new FileModel(file.id, file.name, file.size, file.uploadedTime, file.allowedAnonymous);
  }

  loadTemplate(file: FileModel) {
    if (this.editedFile && this.editedFile.id == file.id) {
        return this.editTemplate;
    } else {
        return this.readOnlyTemplate;
    }
  }

  saveFile() {
    this._fileService.updateFile(this.editedFile).subscribe(res => {
        this.statusMessage = res,
        this.loadFiles();
    });
    this.editedFile = null;
  }

  deleteFiles(file: FileModel) {
    this._fileService.deleteFiles(file.id).subscribe(() => {
        this.statusMessage = 'Deleted',
        this.loadFiles();
    });
  }

  convertUnixToUtc(unixTime: number) {
    let date = new Date(unixTime * 1000)
    let pipe = new DatePipe('en-US')
    let formattedDate = pipe.transform(date, 'HH:MM:SS yyyy/MM/dd');
    return formattedDate
  }

  formatFileSize(size) {
    return size <= 1000 ? size + ' KB' : (size / 1000).toFixed(2) + ' MB'
  }
}
