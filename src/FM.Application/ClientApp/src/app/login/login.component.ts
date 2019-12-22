import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    username: "Vasya",
    password: "Pass123$",
    client_id: "Web",
    client_secret: "secret",
    grant_type: "password",
  }

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
      err => console.log(err)
    ) 
  }
}
