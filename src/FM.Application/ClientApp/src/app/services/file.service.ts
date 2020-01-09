import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private _http: HttpClient) { }

  getFiles(options: any) {
    return this._http.post<any>(environment.fileEndpoint + 'files', options)
  }

  getFileHistories(options: any) {
    return this._http.get<any>(environment.fileHistoryEndpoint + options.fileId + '/' + options.pageIndex + '/' + options.itemsPage)
  }

  deleteFiles(fileIds: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: fileIds 
    }
    return this._http.delete<any>(environment.fileEndpoint, options)
  }

  updateFile(file: any) {
    return this._http.put<any>(environment.fileEndpoint, file)
  }

  downloadFile(fileId: string): Observable<any> {
    return this._http.get(environment.fileEndpoint + fileId, {
      responseType: "blob"
    });
  }
}
