import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {

  filesUrl = "http://localhost:5001/api/fileapp";
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.filesUrl)
    .subscribe((data) => this.response = JSON.stringify(data));
  }

}
