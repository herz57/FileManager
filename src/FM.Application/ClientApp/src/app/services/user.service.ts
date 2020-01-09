import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
    return this._http.put<any>(environment.usersEndpoint, changePasswordUserData)
  }

  deleteUser(passwordUserData: any) {
    return this._http.delete<any>(environment.usersEndpoint + passwordUserData.value)
  }

  forgotPasswordUser(user: any) {
    return this._http.post<any>(environment.usersEndpoint + 'forgotpass', user)
  }

  resetPasswordUser(passwordsWithCode: any) {
    return this._http.post<any>(environment.usersEndpoint + 'resetpass', passwordsWithCode)
  }
}
