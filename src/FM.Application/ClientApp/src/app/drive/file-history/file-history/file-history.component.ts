import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-history',
  templateUrl: './file-history.component.html',
  styleUrls: ['./file-history.component.scss']
})
export class FileHistoryComponent implements OnInit {

  fileHistory = new Array<string>(6)

  constructor() { }

  ngOnInit() {
  }

}
