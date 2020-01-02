import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../shared/styles/form.scss', './forgot-password.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  user = { }
  response: string

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  sendEmail() {
    this._userService.forgotPasswordUser(this.user)
    .subscribe(res => this.response = res,
    err => console.log(err))
  }
}
