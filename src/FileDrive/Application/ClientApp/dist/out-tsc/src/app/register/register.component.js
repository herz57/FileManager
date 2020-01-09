import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.registerUserData = {};
    }
    ngOnInit() {
    }
    registerUser() {
        this._auth.registerUser(this.registerUserData)
            .subscribe(result => {
            this._router.navigate(['/login']);
        }, err => console.log(err));
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map