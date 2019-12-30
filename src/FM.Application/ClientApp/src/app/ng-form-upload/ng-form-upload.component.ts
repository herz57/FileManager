import { Component } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { request } from 'http';
import { Router } from '@angular/router';
 
const URL = 'http://localhost:5000/api/file/';
 
@Component({
  selector: 'app-ng-form-upload',
  templateUrl: './ng-form-upload.component.html',
  styleUrls: ['./ng-form-upload.component.scss']
})
export class NgFormUploadComponent {
 
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;
  statusCode: number;
  responseColor: string;
 
  constructor (private authService: AuthService, 
                private _router: Router,
                http: HttpClient){
                  
    this.uploader = new FileUploader({
      url: URL,
      formatDataFunction: async (item) => {
        return http.post<any>(URL, item)
      }
    });

    this.uploader.onErrorItem = (item, response, status) => this.onErrorItem(item, response, status);
    this.uploader.onSuccessItem = (item, response, status) => this.onSuccessItem(item, response, status);
 
    this.hasBaseDropZoneOver = false;
    this.addHeaders()
  }

  onSuccessItem(item: FileItem, response: string, status: number): any {
    this.response = response
    this.statusCode = status;
    this.responseColor = 'green'
  }

  onErrorItem(item: FileItem, response: string, status: number): any {
    if (status >= 400) {
      this.response = response
      this.statusCode = status;
      if (status == 401) {
        this.responseColor = 'red'
        console.log('401 handle')
        this.authService.refreshToken()
         .subscribe(() => this.handle401Error(), 
          () => this._router.navigate(['/login']));
      } 
    }
  }

  handle401Error() {
    this.addHeaders()
    this.uploader.uploadAll()
  }

  addHeaders() {
    this.uploader.onBeforeUploadItem = (item: FileItem) => {
      item.withCredentials = false;
      this.uploader.authToken = 'Bearer ' + this.authService.getAccessToken();
    };
  }
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
}
