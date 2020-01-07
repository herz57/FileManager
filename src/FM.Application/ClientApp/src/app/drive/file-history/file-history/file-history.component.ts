import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { FilesResponseModel } from '../../Models/filesResponseModel';
import { FileHistoryModel } from '../../Models/fileHistoryModel';
import { ActivatedRoute } from '@angular/router';
import { FileHistoryResponseModel } from '../../Models/fileHistoryResponseModel';

@Component({
  selector: 'app-file-history',
  templateUrl: './file-history.component.html',
  styleUrls: ['./file-history.component.scss']
})
export class FileHistoryComponent implements OnInit {

  fileHistory: Array<FileHistoryModel>
  page = 1
  pageSize = 5
  options = {
    fileId: "",
    pageIndex: this.page,
    itemsPage: this.pageSize
  }
  hasHistory: string

  constructor(private _fileService: FileService,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.options.fileId = this._route.snapshot.params['id']
  });
    this.loadHistory()
  }

  loadHistory() {
    this.options.pageIndex = this.page
    this._fileService.getFileHistories(this.options).subscribe((res: FileHistoryResponseModel) => {
      if (res.history.length == 0) {
        this.hasHistory = "The file has not been downloaded yet"
      }
      this.paginationResponseHandler(res)
    });
  }

  paginationResponseHandler(response) {console.log(response)
    if (response.fileHistoryLength > 0) {
      this.fileHistory = response.history;
      this.fileHistory.length = response.fileHistoryLength
    } else {
      for (let i = (this.page - 1) * this.options.itemsPage, j = 0; i < this.fileHistory.length; i++) {
          this.fileHistory[i] = response.history[j++]
      }
    }
  }

}
