import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['../../shared/styles/form.scss', './changepass.component.scss']
})
export class ChangepassComponent implements OnInit {

  changePasswordUserData: IChangePasswordUser = {
    currentpassword: "",
    newpassword: "",
    passwordconfirm: ""
  }

  response: string;

  constructor(private _userService: UserService,
              private _authService: AuthService) { }

  ngOnInit() {
  }

  changePassword() {
    this._userService.changePasswordUser(this.changePasswordUserData)
    .subscribe((res) => {
      this.response = res
      setTimeout(() => {
        this._authService.logoutUser()
      }, 1000)
    },
    err =>  {
      this.response = err.error
    })
  }
}

export interface IChangePasswordUser {
  currentpassword: string
  newpassword: string
  passwordconfirm: string
}