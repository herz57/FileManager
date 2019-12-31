import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  changePassComponent: boolean
  deleteAccountComponent: boolean

  constructor() { }

  ngOnInit() {
  }

  changePassOpen() {
    this.changePassComponent = true
  }

  deleteAccountOpen() {
    this.deleteAccountComponent = true
  }
}
