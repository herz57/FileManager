import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { stringify } from 'querystring';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../shared/styles/form.scss', './reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  user: IResetPasswordUser

  response: string;

  constructor(private _route: ActivatedRoute,
              private _userService: UserService,
              private _authService: AuthService) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.user.id = this._route.snapshot.params['id']
      this.user.code = (params['code'] as string).replace(/\s/g, '+')
  });
  }

  resetPassword() {
    this._userService.resetPasswordUser(this.user)
    .subscribe(res => {
      this.response = res
      setTimeout(() => {
        this._authService.logoutUser()
      }, 1000)
    },
      err => console.log(err))
  }
}

export interface IResetPasswordUser {
  password: string
  passwordconfirm: string
  id: string
  code: string
}