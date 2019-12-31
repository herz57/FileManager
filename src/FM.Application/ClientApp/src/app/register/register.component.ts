import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router,
              private _userService: UserService) { }

  ngOnInit() {
  }

  registerUser() {
    this._userService.registerUser(this.registerUserData)
  }
}
