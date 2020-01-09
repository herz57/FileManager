import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {
            username: "Vasya",
            password: "Pass123$",
            client_id: "Web",
            client_secret: "secret",
            grant_type: "password",
        };
    }
    ngOnInit() {
    }
    loginUser() {
        this._auth.loginUser(this.loginUserData)
            .subscribe(res => {
            this._router.navigate(['/drive']);
        }, err => console.log(err));
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map