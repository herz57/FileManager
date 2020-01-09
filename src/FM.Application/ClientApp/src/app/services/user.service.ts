import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://cc.filecoreapp.com:88/api/users/';

  constructor(private _auth: AuthService,
              private _router: Router,
              private _http: HttpClient) { }

  registerUser(registerUserData: any) {
    this._auth.registerUser(registerUserData)
    .subscribe(result => {
      this._router.navigate(['/login']);
    }, 
    err => console.log(err))
  }

  changePasswordUser(changePasswordUserData: any) {
    return this._http.put<any>(this.URL, changePasswordUserData)
  }

  deleteUser(passwordUserData: any) {
    return this._http.delete<any>(this.URL + passwordUserData.value)
  }

  forgotPasswordUser(user: any) {
    return this._http.post<any>(this.URL + 'forgotpass', user)
  }

  resetPasswordUser(passwordsWithCode: any) {
    return this._http.post<any>(this.URL + 'resetpass', passwordsWithCode)
  }
}
