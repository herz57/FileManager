import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['../../shared/styles/form.scss', './deleteaccount.component.scss' ]
})
export class DeleteaccountComponent implements OnInit {

  passwordUserData = { }
  deleteResult: string

  constructor(private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
  }

  deleteUser() {
    this._userService.deleteUser(this.passwordUserData)
    .subscribe((res) => {
      this.deleteResult = res
      setTimeout(() => this._router.navigate(['/register']), 200)
    },
    err => console.log(err))
  }

}
