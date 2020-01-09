import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DriveComponent = class DriveComponent {
    constructor(http) {
        this.http = http;
        this.filesUrl = "http://localhost:5000/api/file/files";
    }
    ngOnInit() {
        let body = {};
        this.http.post(this.filesUrl, body)
            .subscribe((data) => this.response = JSON.stringify(data));
    }
};
DriveComponent = tslib_1.__decorate([
    Component({
        selector: 'app-drive',
        templateUrl: './drive.component.html',
        styleUrls: ['./drive.component.scss']
    })
], DriveComponent);
export { DriveComponent };
//# sourceMappingURL=drive.component.js.map