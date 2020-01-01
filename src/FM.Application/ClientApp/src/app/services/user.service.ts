import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://localhost:5001/api/users/';

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
    this._http.put<any>(this.URL, changePasswordUserData)
    .subscribe(result => {
      this._auth.logoutUser()
    }, 
    err => console.log(err))
  }

  deleteUser(passwordUserData: any) {
    return this._http.delete<any>(this.URL + passwordUserData.value)
  }
}
