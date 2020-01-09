import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../shared/styles/loginlogoutform.scss', './register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData: IRegisterUser

  constructor(private _auth: AuthService,
              private _router: Router,
              private _userService: UserService) { }

  ngOnInit() {
  }

  registerUser() {
    this._userService.registerUser(this.registerUserData)
  }
}

export interface IRegisterUser {
  username: string
  email: string
  password: string
  passwordconfirm: string
}
