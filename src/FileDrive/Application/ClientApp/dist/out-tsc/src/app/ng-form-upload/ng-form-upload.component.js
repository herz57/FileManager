import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:5000/api/file/';
let NgFormUploadComponent = class NgFormUploadComponent {
    constructor(authService, http) {
        this.authService = authService;
        this.uploader = new FileUploader({
            url: URL,
            formatDataFunction: (item) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return http.post(URL, item);
            })
        });
        this.uploader.onErrorItem = (item, response, status) => this.onErrorItem(item, response, status);
        this.uploader.onSuccessItem = (item, response, status) => this.onSuccessItem(item, response, status);
        this.hasBaseDropZoneOver = false;
        this.addHeaders();
    }
    onSuccessItem(item, response, status) {
        this.response = response;
    }
    onErrorItem(item, response, status) {
        if (status >= 400) {
            this.response = response;
            this.statusCode = status;
            if (status == 401) {
                this.authService.refreshToken();
                this.addHeaders();
                this.uploader.uploadAll();
                console.log(787);
            }
        }
    }
    addHeaders() {
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
            this.uploader.authToken = 'Bearer ' + this.authService.getAccessToken();
        };
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
};
NgFormUploadComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ng-form-upload',
        templateUrl: './ng-form-upload.component.html',
        styleUrls: ['./ng-form-upload.component.scss']
    })
], NgFormUploadComponent);
export { NgFormUploadComponent };
//# sourceMappingURL=ng-form-upload.component.js.map