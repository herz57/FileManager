import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['../../shared/styles/form.scss', './changepass.component.scss']
})
export class ChangepassComponent implements OnInit {

  changePasswordUserData = {

  }

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  changePassword() {
    this._userService.changePasswordUser(this.changePasswordUserData)
  }

}
