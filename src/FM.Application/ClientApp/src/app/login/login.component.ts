import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared/styles/loginlogoutform.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    username: "",
    password: "",
    client_id: "Web",
    client_secret: "secret",
    grant_type: "password",
  }

  response: string

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        this._router.navigate(['/drive']);
      },
      err => {
        this.response = err.error.error_description
      }
    ) 
  }
}
