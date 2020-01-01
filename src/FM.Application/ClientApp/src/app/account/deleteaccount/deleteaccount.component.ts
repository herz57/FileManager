import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['../../shared/styles/form.scss', './deleteaccount.component.scss' ]
})
export class DeleteaccountComponent implements OnInit {

  passwordUserData = { }
  deleteResult: string

  constructor(private _userService: UserService,
              private _authService: AuthService) { }

  ngOnInit() {
  }

  deleteUser() {
    this._userService.deleteUser(this.passwordUserData)
    .subscribe((res) => {
      this.deleteResult = res
      setTimeout(() => {
        this._authService.logoutUser()
      }, 1000)
    },
    err => console.log(err))
  }

}
