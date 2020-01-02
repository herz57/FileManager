import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url = 'http://localhost:5000/api/file/'

  constructor(private _http: HttpClient) { }

  getFiles(options: any) {
    return this._http.post<any>(this.url + 'files', options)
  }

  deleteFiles(fileIds: any) {
    return this._http.delete<any>(this.url, fileIds)
  }

  updateFile(file: any) {
    return this._http.patch<any>(this.url, file)
  }

  downloadFile(fileId: string) {
    return this._http.get<any>(this.url + fileId)
  }
}
