import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['../../shared/styles/form.scss', './deleteaccount.component.scss' ]
})
export class DeleteaccountComponent implements OnInit {

  password = { }

  constructor() { }

  ngOnInit() {
  }

}
