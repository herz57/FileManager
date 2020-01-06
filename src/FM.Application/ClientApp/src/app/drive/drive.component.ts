import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../services/file.service';
import { FileModel } from './Models/fileModel';
import { FilesResponseModel } from './Models/filesResponseModel';
import { FileFilterModel } from './Models/fileFilterModel';
import { FileFiltes } from './Models/fileFilters';
import { saveAs } from "file-saver";
import { Router } from '@angular/router';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {

  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;

  filesUrl = "http://localhost:5000/api/file/files";
  response: any
  editedFile: FileModel
  files: Array<FileModel>
  statusMessage: string
  page: number = 1
  sortSymbol = new Array<string>(5)
  controlSort: number = 0
  filters = {
    size: new Array<number>(2),
    uploadTime: new Array<Date>(2)
  }
  validateMessage: string
  isNewRecord: boolean


  constructor(private http: HttpClient,
              private _fileService: FileService,
              private filtersModel: FileFilterModel,
              private elementRef: ElementRef,
              private _router: Router) {
        this.files = new Array<FileModel>();
        this.sortSymbol[0] = '&uarr;'
        filtersModel.sortingMode = 1
        filtersModel.sortingColumn = 'Id'
        filtersModel.pageIndex = 1
        this.filtersModel.filters = new FileFiltes()
   }

  ngOnInit() {
    this.loadFiles();
  }

  private loadFiles() {
    this._fileService.getFiles(this.filtersModel).subscribe((res: FilesResponseModel) => {
      this.paginationResponseHandler(res)
    });
  }

  fileHistory(file, event) {
    this._router.navigate(['drive/file-history/' + file.id])
  }

  paginationResponseHandler(response) {
    if (response.userFilesLength > 0) {
      this.files = response.files;
      this.files.length = response.userFilesLength
      this.page = this.filtersModel.pageIndex
    } else {
      for (let i = (this.filtersModel.pageIndex - 1) * 10, j = 0; i < this.files.length; i++) {
          this.files[i] = response.files[j++]
      }
      this.page = this.filtersModel.pageIndex
    }
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
        this.loadFiles()
    });
    this.editedFile = null;
  }

  downloadFile(file) {
    this._fileService.downloadFile(file.id).subscribe(
      data => {
        saveAs(data, file.name);
      },
      err => {
        alert("Problem while downloading the file.");
        console.error(err);
      }
    );
  }

  deleteFiles(file: FileModel) {
    let fileIds: string[] = [file.id]
    this._fileService.deleteFiles(fileIds).subscribe(() => {
        this.statusMessage = 'Deleted',
        this.loadFiles()
    })
  }

  cancel() {
    if (this.isNewRecord) {
        this.files.pop();
        this.isNewRecord = false;
    }
    this.editedFile = null;
  }

  shareFile(event) {
    console.log(event)
  }

  formatFileSize(size) {
    if (size < 1024) {
      return size + ' B';
    } else if (size >= 1024 && size < 1024000) {
      return (size / 1000).toFixed(2) + ' KB'
    }
    return (size / 1000000).toFixed(2) + ' MB'
  }

  sort(column, index: number) {
    if (this.controlSort != index) {
      this.filtersModel.sortingMode = 1
    } else {
      this.filtersModel.sortingMode = this.filtersModel.sortingMode < 2 ? ++this.filtersModel.sortingMode : 0
    }
    this.filtersModel.sortingColumn = column
    this._fileService.getFiles(this.filtersModel).subscribe((res: FilesResponseModel) => {
      if (this.filtersModel.pageIndex != 1) {
        for (let i = this.files.length - 1, j = res.files.length - 1; i > 0; i--) {
          if (this.files[i] != undefined) {
            this.files[i] = res.files[j--]
          }
      }
      this.page = this.filtersModel.pageIndex
      } else {
        this.paginationResponseHandler(res)
      }
    });
    this.changeSortArrow(index)
  }

  changeSortArrow(index: number) {
    for (let i = 0; i < this.sortSymbol.length; i++) {
      this.sortSymbol[i] = ''
    }
    if (this.filtersModel.sortingMode == 1) {
      this.sortSymbol[index] = '&uarr;'
    } else if (this.filtersModel.sortingMode == 2) {
      this.sortSymbol[index] = '&darr;'
    }
    this.controlSort = index
  }

  allowedAnonymousSelect(value) {
    this.filtersModel.filters.allowedAnonymous = value
    this.applyFilters()
  }

  clearFilters() {
    this.filtersModel = new FileFilterModel()
    this.filtersModel.filters = new FileFiltes()
    this.filters = {
      size: new Array<number>(2),
      uploadTime: new Array<Date>(2)
    }
    this.loadFiles()
  }

  filtersValidate(): boolean {
    if (!!this.filters.uploadTime[0] != !!this.filters.uploadTime[1]) {
      return false
    }
    if (!!this.filters.size[0] != !!this.filters.size[1]) {
      return false
    }
    if (this.filters.size[0] < 0.001 || this.filters.size[0] > 51200 
      || this.filters.size[1] < 0.001 || this.filters.size[0] > 51200) {
        this.validateMessage = "min size = 0.001 max size = 51200"
      return false
    }
    if (this.filtersModel.filters.id && !new RegExp('^([a-zA-Z0-9-]){30,50}$').test(this.filtersModel.filters.id)) {
      this.validateMessage = "Invalid id"
      return false
    }
    if (this.filtersModel.filters.name && (this.filtersModel.filters.name.length > 100 
      || this.filtersModel.filters.name.indexOf(".") == -1)) {
      this.validateMessage = "Invalid name"
      return false
    }
    this.validateMessage = ""
    return true
  }

  applyFilters() {
    if (!this.filtersValidate())
      return

    this.filtersModel.pageIndex = 1
    if (this.filters.uploadTime[0] && this.filters.uploadTime[1]) {
      this.filtersModel.filters.uploadTime = new Array<number>(2)
      this.filtersModel.filters.uploadTime[0] = new Date(this.filters.uploadTime[0]).getTime() / 1000
      this.filtersModel.filters.uploadTime[1] = new Date(this.filters.uploadTime[1]).getTime() / 1000
    } else {
      this.filtersModel.filters.uploadTime = null
    }
    
    if (this.filters.size[0] && this.filters.size[1]) {
      this.filtersModel.filters.size = new Array<number>(2)
      this.filtersModel.filters.size[0] = this.filters.size[0] * 1024
      this.filtersModel.filters.size[1] = this.filters.size[1] * 1024
     } else {
      this.filtersModel.filters.size = null
     }

    this.filtersModel.filters.name = this.filtersModel.filters.name ? 
      this.filtersModel.filters.name : null

    this.filtersModel.filters.id = this.filtersModel.filters.id ? 
      this.filtersModel.filters.id : null

    this._fileService.getFiles(this.filtersModel).subscribe((res: FilesResponseModel) => {
      this.files = res.files;
      this.files.length = res.userFilesLength
      this.page = 1
    })
  }
}
