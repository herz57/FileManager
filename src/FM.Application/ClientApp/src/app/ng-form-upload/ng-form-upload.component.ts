import { Component } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
 
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
      url: environment.fileEndpoint,
      formatDataFunction: async (item) => {
        return http.post<any>(environment.fileEndpoint, item)
      }
    });

    this.uploader.onSuccessItem = (item, response, status) => this.onSuccessItem(item, response);
    this.uploader.onErrorItem = (item, response, status) => this.onErrorItem(item, response, status);
 
    this.hasBaseDropZoneOver = false;
    this.addHeaders()
  }

  onSuccessItem(item: FileItem, response: string): any {
    this.response = response
    this.responseColor = 'green'
  }

  onErrorItem(item: FileItem, response: string, status: number): any {
    if (status >= 400) {
      this.response = response
      this.responseColor = 'red'
      if (status == 401) {
        this.authService.refreshToken()
         .subscribe(() => this.handle401Error(), 
          () => this._router.navigate(['/login']));
      } 
    }
  }

  handle401Error() {
    for (let i = 0; i < this.uploader.queue.length; i++) {
      this.uploader.queue[i].isUploaded = false;
    }
    
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
