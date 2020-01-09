import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  year: number = new Date().getFullYear()

  constructor(public _authService: AuthService) { }
  title = 'ClientApp';
}
