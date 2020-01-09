import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url = 'http://cc.filecoreapp.com:80/api/file/'
  private fileHistoryUrl = 'http://cc.filecoreapp.com:80/api/filehistory/'

  constructor(private _http: HttpClient) { }

  getFiles(options: any) {
    return this._http.post<any>(this.url + 'files', options)
  }

  getFileHistories(options: any) {
    return this._http.get<any>(this.fileHistoryUrl + options.fileId + '/' + options.pageIndex + '/' + options.itemsPage)
  }

  deleteFiles(fileIds: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: fileIds 
    }
    return this._http.delete<any>(this.url, options)
  }

  updateFile(file: any) {
    return this._http.put<any>(this.url, file)
  }

  downloadFile(fileId: string): Observable<any> {
    return this._http.get(this.url + fileId, {
      responseType: "blob"
    });
  }
}
