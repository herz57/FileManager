(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"acc_list_container\">\r\n    <ul class=\"nav flex-column\">\r\n        <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" routerLink=\"/account/changepass\">Change Password</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/account/deleteaccount\">Delete Account</a>\r\n        </li>\r\n    </ul>\r\n    \r\n</div>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/changepass/changepass.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/changepass/changepass.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-md-offset-2 changepass_cont\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                        Change password   \r\n                    </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div style=\"margin-top:20px;\" class=\"col-xs-6 col-sm-6 col-md-6 login-box\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" name=\"currentpassword\" #currentpassword=\"ngModel\" [(ngModel)]=\"changePasswordUserData.currentpassword\" type=\"password\" placeholder=\"Current Password\" required pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#!%*?&])[A-Za-z\\d$@$#!%*?&].{7,20}\">\r\n                                <div [hidden]=\"currentpassword.valid || currentpassword.untouched\" class=\"alert-message\">\r\n                                    Incorrect password format\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" name=\"newpassword\" #newpassword=\"ngModel\" [(ngModel)]=\"changePasswordUserData.newpassword\" type=\"password\" placeholder=\"New Password\" required pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#!%*?&])[A-Za-z\\d$@$#!%*?&].{7,20}\">\r\n                                <div [hidden]=\"newpassword.valid || newpassword.untouched\" class=\"alert-message\">\r\n                                    Incorrect password format\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" name=\"passwordconfirm\" #passwordconfirm=\"ngModel\" [(ngModel)]=\"changePasswordUserData.passwordconfirm\" type=\"password\" placeholder=\"Confirm Password\" required pattern=\"{{ newpassword.value }}\">\r\n                                <div [hidden]=\"passwordconfirm.valid || passwordconfirm.untouched\" class=\"alert-message\">\r\n                                    Passwords don't match\r\n                                </div>\r\n                            </div>\r\n                            <small class=\"form-text text-muted\">Password must has minimum 8 and maximum 20 characters, \r\n                                at least one lowercase and one uppercase letter, \r\n                                one number, one special character.\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                        <button class=\"btn icon-btn-save\" [disabled]=\"currentpassword.invalid || newpassword.invalid || passwordconfirm.invalid\" type=\"submit\" (click)=\"changePassword()\">Save</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"response\" *ngIf=\"response\">{{response}}</div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/deleteaccount/deleteaccount.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/deleteaccount/deleteaccount.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-md-offset-2 changepass_cont\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                        Delete Account\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div style=\"margin-top:20px;\" class=\"col-xs-6 col-sm-6 col-md-6 login-box\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" name=\"pass\" #pass=\"ngModel\" [(ngModel)]=\"passwordUserData.value\" type=\"password\" placeholder=\"Password\" required pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#!%*?&])[A-Za-z\\d$@$#!%*?&].{7,20}\">\r\n                                <div [hidden]=\"pass.valid || pass.untouched\" class=\"alert-message\">\r\n                                    Incorrect password format\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                        <button class=\"btn icon-btn-save\" [disabled]=\"pass.invalid\" type=\"submit\" (click)=\"deleteUser()\">Delete Account</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"response\" *ngIf=\"response\">{{response}}</div> \r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n      <a class=\"navbar-brand\" href=\"#\">FileDrive</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/account\" routerLinkActive=\"active\">Account</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/upload-files\" routerLinkActive=\"active\">Upload Files</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/drive\" routerLinkActive=\"active\">Drive</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav\">\r\n            <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Sign In</a>\r\n            <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\">Sign Up</a>\r\n            <a class=\"nav-link\" style=\"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" (click)=\"_authService.logoutUser()\">Logout</a>        \r\n        </ul>\r\n      </div>\r\n    </nav>    \r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>         \r\n    </div>\r\n  </div>\r\n  <footer class=\"page-footer font-small blue\">\r\n    <div class=\"footer-copyright text-center py-3\">© {{year}} Copyright\r\n      <a routerLink=\"/drive\"> FileDrive</a>\r\n    </div>\r\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drive/drive.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drive/drive.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"drive-wrapper\" *ngIf=\"haveFiles;\">\r\n<div class=\"form-group row\" >\r\n    <table class=\"table\" >\r\n        <thead>\r\n        <tr class=\"top-headers-row\">\r\n            <th><label for=\"Id\">Id</label></th>\r\n            <th><label for=\"Name\">Name</label></th>\r\n            <th><label>Size (KB)</label></th>\r\n            <th><label>Uploaded time</label></th>\r\n            <th></th>\r\n            <th></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr class=\"filters_row\" (change)=\"applyFilters()\">\r\n            <td><input class=\"form-control\" id=\"Id\" [(ngModel)]=\"filtersModel.filters.id\" type=\"text\" placeholder=\"Id\"></td>\r\n            <td><input class=\"form-control\" id=\"Name\" [(ngModel)]=\"filtersModel.filters.name\" type=\"text\" placeholder=\"Name\"></td>\r\n            <td><input class=\"form-control min\" id=\"MinSize\" [(ngModel)]=\"filters.size[0]\" type=\"number\" placeholder=\"Min\">\r\n                <input class=\"form-control\" id=\"MaxSize\" [(ngModel)]=\"filters.size[1]\" type=\"number\" placeholder=\"Max\">\r\n            </td>\r\n            <td>\r\n                <input type=\"date\" id=\"datamin\" [(ngModel)]=\"filters.uploadTime[0]\">\r\n                <input type=\"date\" id=\"datamax\" [(ngModel)]=\"filters.uploadTime[1]\">\r\n            </td>\r\n            <td><div class=\"dropdown\">\r\n                <button class=\"btn gray-btn dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  Allowed anonymous\r\n                </button>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                  <button class=\"dropdown-item\" type=\"button\" (click)=\"allowedAnonymousSelect(null)\">All</button>\r\n                  <button class=\"dropdown-item\" type=\"button\" (click)=\"allowedAnonymousSelect(true)\">Yes</button>\r\n                  <button class=\"dropdown-item\" type=\"button\" (click)=\"allowedAnonymousSelect(false)\">No</button>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n                <button class=\"btn blue-btn\" type=\"submit\" (click)=\"clearFilters()\">Clear</button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n<div class=\"table-wrapper\" style=\"position: relative; display: inline-block;\">\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <td>#</td>\r\n            <td class=\"files-top-row\" (click)=\"sort('Name', 1)\"><span class=\"arrow\" [innerHTML]='sortSymbol[1]'></span> Name</td>\r\n            <td class=\"files-top-row\" (click)=\"sort('Size', 2)\"><span class=\"arrow\" [innerHTML]='sortSymbol[2]'></span> Size</td>\r\n            <td class=\"files-top-row\" (click)=\"sort('UploadedTime', 3)\"><span class=\"arrow\" [innerHTML]='sortSymbol[3]'></span> Uploaded date</td>\r\n            <td class=\"files-top-row\" (click)=\"sort('AllowedAnonymous', 4)\"><span class=\"arrow\" [innerHTML]='sortSymbol[4]'></span> Allowed anonymous</td>\r\n            <toaster-container class=\"toast\"></toaster-container></tr>\r\n    </thead>\r\n    <tbody style=\"position: relative;\">\r\n        \r\n        <tr *ngFor=\"let file of files | paginate: { itemsPerPage: 10, currentPage: page }\">\r\n            <ng-template [ngTemplateOutlet]=\"loadTemplate(file)\" \r\n                        [ngTemplateOutletContext]=\"{ $implicit: file}\">\r\n            </ng-template>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n</div>\r\n    \r\n<ng-template #readOnlyTemplate let-file>\r\n    <td>{{files.indexOf(file) + 1}}</td>\r\n    <td>{{file.name}}</td>\r\n    <td>{{formatFileSize(file.size)}}</td>\r\n    <td>{{file.uploadedTime * 1000 - 7200000 | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n    <td style=\"position: relative; float: left;\"><input type=\"radio\" class=\"allowed-control\" [checked]=\"file.allowedAnonymous\" (click)=\"checked=false\">\r\n        <input type=\"button\" value=\"Edit\" class=\"btn list-btn btn-default\" (click)=\"editFile(file)\" />\r\n    </td>\r\n    <td>\r\n        <a id=\"details\" (click)=\"fileHistory(file)\" (click)=\"setId(file.id)\">Details</a>\r\n    </td>\r\n    <td>\r\n        <input type=\"button\" value=\"Delete\" (click)=\"deleteFiles(file)\" class=\"btn list-btn btn-danger\" />\r\n    </td>\r\n    <td>\r\n        <input type=\"button\" value=\"Share\" (click)=\"shareFile(file.id)\" [disabled]=\"!file.allowedAnonymous\" class=\"btn list-btn btn-blue\" />\r\n    </td>\r\n    <td>\r\n        <input type=\"button\" value=\"Download\" (click)=\"downloadFile(file)\" class=\"btn list-btn btn-success\" />\r\n    </td>\r\n    <br>\r\n    <td *ngIf=\"_fileId == file.id && editedFile == null\" class=\"history\">\r\n        <router-outlet></router-outlet>\r\n    </td>\r\n</ng-template>\r\n   \r\n\r\n<ng-template #editTemplate>\r\n    <td></td>\r\n    <td></td>\r\n    <td></td>\r\n    <td></td>\r\n    <td>\r\n        <input type=\"checkbox\" [(ngModel)]=\"editedFile.allowedAnonymous\" class=\"allowed-control\">\r\n        <input type=\"button\" value=\"Save\" (click)=\"saveFile()\" class=\"btn btn-success btn-save\" />\r\n    </td>\r\n    <td>\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\r\n    </td>\r\n    <td></td>\r\n    <td></td>\r\n    <td></td>\r\n</ng-template>\r\n<pagination-controls (pageChange)=\"filtersModel.pageIndex = $event\" (pageChange)=\"loadFiles()\"></pagination-controls>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drive/file-history/file-history/file-history.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drive/file-history/file-history/file-history.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"fileHistory; else elseBlock\">\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <td>#</td>\r\n            <td class=\"files-top-row\"> User id</td>\r\n            <td class=\"files-top-row\"> Date</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let history of fileHistory | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\" (click)=\"fileHistory(file)\">\r\n            <td>{{fileHistory.indexOf(history) + 1}}</td>\r\n            <td *ngIf=\"history\">{{history.userId ? history.userId : 'anonymous'}}</td>\r\n            <td *ngIf=\"history\">{{history.date}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<ngb-pagination\r\n  [(page)]=\"page\"\r\n  [pageSize]=\"pageSize\"\r\n  [collectionSize]=\"fileHistory.length\" (pageChange)=\"loadHistory()\"></ngb-pagination>\r\n</div>\r\n<ng-template #elseBlock>{{hasHistory}}</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-md-offset-2 changepass_cont\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n                <h5 class=\"panel-title\">\n                        Enter email\n                </h5>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div style=\"margin-top:20px;\" class=\"col-xs-6 col-sm-6 col-md-6 login-box\">\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" type=\"email\" placeholder=\"Email\" required email>\n                                <div [hidden]=\"email.valid || email.untouched\" class=\"alert-message\">\n                                    Email isn't correct\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-footer\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                        <button class=\"btn icon-btn-save\" [disabled]=\"email.invalid\" type=\"submit\" (click)=\"sendEmail()\">Send</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"response\" *ngIf=\"response\">{{response}}</div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-w3layouts wrapper\">\r\n    <h2>SIGN IN</h2>\r\n    <div class=\"main-agileinfo\">\r\n        <div class=\"agileits-top\">\r\n            <form action=\"#\" method=\"post\" class=\"reg-form\">\r\n                <div [hidden]=\"Username.valid || Username.untouched\" class=\"alert-message \">\r\n                    Incorrect username format\r\n                </div>\r\n                <input class=\"text\" [(ngModel)]=\"loginUserData.username\" type=\"text\" #Username=\"ngModel\" name=\"Username\" placeholder=\"Username\" required pattern=\"^[a-zA-Z0-9]{5,16}\">\r\n                <div [hidden]=\"password.valid || password.untouched\" class=\"alert-message\">\r\n                    Incorrect password format\r\n                </div>\r\n                <input class=\"text\" [(ngModel)]=\"loginUserData.password\" type=\"password\" #password=\"ngModel\" name=\"password\" placeholder=\"Password\" required pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#!%*?&])[A-Za-z\\d$@$#!%*?&].{7,20}\">\r\n                <input type=\"submit\" (click)=\"loginUser()\" value=\"SIGN IN\" [disabled]=\"Username.invalid || password.invalid\">\r\n            </form>\r\n            <p>Don't have an account? <a routerLink=\"/register\"> Sign up</a></p>\r\n            <p><a routerLink=\"/forgot-password\"> Forgot password</a></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng-form-upload/ng-form-upload.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ng-form-upload/ng-form-upload.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n    .my-drop-zone { border: dotted 3px lightgray; }\r\n    .nv-file-over { border: dotted 3px red; }\r\n    .another-file-over-class { border: dotted 3px green; }\r\n \r\n    html, body { height: 100%; }\r\n</style>\r\n \r\n<div class=\"container\">\r\n \r\n    <div class=\"navbar navbar-default\">\r\n    </div>\r\n \r\n    <div class=\"row\">\r\n \r\n        <div class=\"col-md-3\">\r\n \r\n            <h3>Select files</h3>\r\n \r\n            <div ng2FileDrop\r\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n                 (fileOver)=\"fileOverBase($event)\"\r\n                 [uploader]=\"uploader\"\r\n                 class=\"well my-drop-zone\">\r\n                 <p><strong>Choose files</strong><span> or drag it here</span>.</p>\r\n                <input type=\"file\" name=\"file\" class=\"file_input\" ng2FileSelect [uploader]=\"uploader\" multiple /><br/>\r\n            </div>\r\n \r\n        </div>\r\n \r\n        <div class=\"table_container col-md-9\" style=\"margin-bottom: 40px\">\r\n \r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th width=\"50%\">Name</th>\r\n                    <th>Size</th>\r\n                    <th>Progress</th>\r\n                    <th>Status</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of uploader.queue\">\r\n                    <td><strong>{{ item?.file?.name }}</strong></td>\r\n                    <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                    <td *ngIf=\"uploader.options.isHTML5\">\r\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                    </td>\r\n                    <td nowrap>\r\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                                (click)=\"item.remove()\">\r\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n \r\n            <div>\r\n                <div>\r\n                    <p>Queue progress:</p>\r\n                    <div class=\"progress\" style=\"\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                    </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n                </button>\r\n                <div class=\"panel-body\" [ngStyle]=\"{'color': responseColor}\">\r\n                    {{ response }}\r\n                </div>\r\n            </div>\r\n \r\n        </div>\r\n    </div>\r\n    <br><br>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-w3layouts wrapper\">\r\n    <h2>SIGN UP</h2>\r\n    <div class=\"main-agileinfo\">\r\n        <div class=\"agileits-top\">\r\n            <form action=\"#\" method=\"post\" class=\"reg-form\">\r\n                <div [hidden]=\"Username.valid || Username.untouched\" class=\"alert-message \">\r\n                    Incorrect username format\r\n                </div>\r\n                <input class=\"text\" [(ngModel)]=\"registerUserData.username\" #Username=\"ngModel\" type=\"text\" name=\"Username\" placeholder=\"Username\" required pattern=\"^[a-zA-Z0-9]{5,16}\">\r\n                <div [hidden]=\"email.valid || email.untouched\" class=\"alert-message\">\r\n                    Email isn't correct\r\n                </div>\r\n                <input class=\"text\" [(ngModel)]=\"registerUserData.email\" #email=\"ngModel\" type=\"email\" name=\"email\" placeholder=\"Email\" required email>\r\n                <div [hidden]=\"password.valid || password.untouched\" class=\"alert-message\">\r\n                    Incorrect password format\r\n                </div>\r\n                <input class=\"text\" [(ngModel)]=\"registerUserData.password\" #password=\"ngModel\" type=\"password\" name=\"password\" placeholder=\"Password\" required pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#!%*?&])[A-Za-z\\d$@$#!%*?&].{7,20}\">\r\n                <div [hidden]=\"passwordconfirm.valid || passwordconfirm.untouched\" class=\"alert-message \">\r\n                    Passwords don't match\r\n                </div>\r\n                <input class=\"text\" [(ngModel)]=\"registerUserData.passwordconfirm\" #passwordconfirm=\"ngModel\" type=\"password\" name=\"passwordconfirm\" placeholder=\"Confirm Password\" required pattern=\"{{ password.value }}\">\r\n                <input type=\"submit\" (click)=\"registerUser()\" value=\"SIGN UP\" [disabled]=\"Username.invalid || email.invalid || password.invalid || passwordconfirm.invalid\">\r\n            </form>\r\n            <p>Already have an Account? <a routerLink=\"/login\"> Sign in</a></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-md-offset-2 changepass_cont\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">\n                        Change password   \n                </h3>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div style=\"margin-top:20px;\" class=\"col-xs-6 col-sm-6 col-md-6 login-box\">\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" name=\"newpassword\" #newpassword=\"ngModel\" [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"New Password\" required pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#!%*?&])[A-Za-z\\d$@$#!%*?&].{7,20}\">\n                                <div [hidden]=\"newpassword.valid || newpassword.untouched\" class=\"alert-message\">\n                                    Incorrect password format\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" name=\"passwordconfirm\" #passwordconfirm=\"ngModel\" [(ngModel)]=\"user.passwordconfirm\" type=\"password\" placeholder=\"Confirm Password\" pattern=\"{{ newpassword.value }}\">\n                                <div [hidden]=\"passwordconfirm.valid || passwordconfirm.untouched\" class=\"alert-message\">\n                                    Passwords don't match\n                                </div>\n                            </div>\n                            <small class=\"form-text text-muted\">Password must has minimum 8 and maximum 20 characters, \n                                at least one lowercase and one uppercase letter, \n                                one number, one special character.\n                            </small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-footer\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                        <button class=\"btn icon-btn-save\" [disabled]=\"newpassword.invalid || passwordconfirm.invalid\" type=\"submit\" (click)=\"resetPassword()\">Save</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"response\" *ngIf=\"response\">{{response}}</div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".acc_list_container .flex-column {\n  display: inline-block;\n  height: 400px;\n  padding: 15px;\n  border-right: 1.5px solid #666666;\n  padding-top: 0;\n  text-align: right;\n  margin-right: 40px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9DOlxcVXNlcnNcXE5FVEZVTExZXFxEZXNrdG9wXFxkZXZcXHNyY1xcRk0uQXBwbGljYXRpb25cXENsaWVudEFwcC9zcmNcXGFwcFxcYWNjb3VudFxcYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFjY19saXN0X2NvbnRhaW5lciB7XHJcblxyXG4gICAgLmZsZXgtY29sdW1uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH0gICBcclxufVxyXG4gIiwiLmFjY19saXN0X2NvbnRhaW5lciAuZmxleC1jb2x1bW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yaWdodDogMS41cHggc29saWQgIzY2NjY2NjtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
    changePassOpen() {
        this.changePassComponent = true;
    }
    deleteAccountOpen() {
        this.deleteAccountComponent = true;
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")).default]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/account/changepass/changepass.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/account/changepass/changepass.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  margin-top: 10px;\n  width: 265px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9jaGFuZ2VwYXNzL0M6XFxVc2Vyc1xcTkVURlVMTFlcXERlc2t0b3BcXGRldlxcc3JjXFxGTS5BcHBsaWNhdGlvblxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhY2NvdW50XFxjaGFuZ2VwYXNzXFxjaGFuZ2VwYXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50L2NoYW5nZXBhc3MvY2hhbmdlcGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9jaGFuZ2VwYXNzL2NoYW5nZXBhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDI2NXB4O1xyXG59Iiwic21hbGwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMjY1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/account/changepass/changepass.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/changepass/changepass.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassComponent", function() { return ChangepassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let ChangepassComponent = class ChangepassComponent {
    constructor(_userService, _authService) {
        this._userService = _userService;
        this._authService = _authService;
        this.changePasswordUserData = {};
    }
    ngOnInit() {
    }
    changePassword() {
        this._userService.changePasswordUser(this.changePasswordUserData)
            .subscribe((res) => {
            this.response = res;
            setTimeout(() => {
                this._authService.logoutUser();
            }, 1000);
        }, err => console.log(err));
    }
};
ChangepassComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ChangepassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changepass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/changepass/changepass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../shared/styles/form.scss */ "./src/app/shared/styles/form.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changepass.component.scss */ "./src/app/account/changepass/changepass.component.scss")).default]
    })
], ChangepassComponent);



/***/ }),

/***/ "./src/app/account/deleteaccount/deleteaccount.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/account/deleteaccount/deleteaccount.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9kZWxldGVhY2NvdW50L0M6XFxVc2Vyc1xcTkVURlVMTFlcXERlc2t0b3BcXGRldlxcc3JjXFxGTS5BcHBsaWNhdGlvblxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhY2NvdW50XFxkZWxldGVhY2NvdW50XFxkZWxldGVhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50L2RlbGV0ZWFjY291bnQvZGVsZXRlYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZGVsZXRlYWNjb3VudC9kZWxldGVhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbiIsIi5idG4ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/account/deleteaccount/deleteaccount.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/account/deleteaccount/deleteaccount.component.ts ***!
  \******************************************************************/
/*! exports provided: DeleteaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteaccountComponent", function() { return DeleteaccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let DeleteaccountComponent = class DeleteaccountComponent {
    constructor(_userService, _authService) {
        this._userService = _userService;
        this._authService = _authService;
        this.passwordUserData = {};
    }
    ngOnInit() {
    }
    deleteUser() {
        this._userService.deleteUser(this.passwordUserData)
            .subscribe((res) => {
            this.response = res;
            setTimeout(() => {
                this._authService.logoutUser();
            }, 1000);
        }, err => console.log(err));
    }
};
DeleteaccountComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
DeleteaccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deleteaccount',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deleteaccount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/deleteaccount/deleteaccount.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../shared/styles/form.scss */ "./src/app/shared/styles/form.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deleteaccount.component.scss */ "./src/app/account/deleteaccount/deleteaccount.component.scss")).default]
    })
], DeleteaccountComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _drive_drive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drive/drive.component */ "./src/app/drive/drive.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_is_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/is_not_logged_in.guard */ "./src/app/guards/is_not_logged_in.guard.ts");
/* harmony import */ var _ng_form_upload_ng_form_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-form-upload/ng-form-upload.component */ "./src/app/ng-form-upload/ng-form-upload.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _account_deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account/deleteaccount/deleteaccount.component */ "./src/app/account/deleteaccount/deleteaccount.component.ts");
/* harmony import */ var _account_changepass_changepass_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/changepass/changepass.component */ "./src/app/account/changepass/changepass.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _drive_file_history_file_history_file_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drive/file-history/file-history/file-history.component */ "./src/app/drive/file-history/file-history/file-history.component.ts");















const accountChildRoutes = [
    { path: 'changepass', component: _account_changepass_changepass_component__WEBPACK_IMPORTED_MODULE_11__["ChangepassComponent"] },
    { path: 'deleteaccount', component: _account_deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_10__["DeleteaccountComponent"] },
];
const driveChildRoutes = [
    { path: 'file-history/:id', component: _drive_file_history_file_history_file_history_component__WEBPACK_IMPORTED_MODULE_14__["FileHistoryComponent"] }
];
const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
        canActivate: [_guards_is_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsNotLoggedInGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_guards_is_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsNotLoggedInGuard"]]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        canActivate: [_guards_is_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsNotLoggedInGuard"]]
    },
    {
        path: 'drive',
        component: _drive_drive_component__WEBPACK_IMPORTED_MODULE_5__["DriveComponent"],
        children: driveChildRoutes,
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'upload-files',
        component: _ng_form_upload_ng_form_upload_component__WEBPACK_IMPORTED_MODULE_8__["NgFormUploadComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'account',
        component: _account_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
        children: accountChildRoutes,
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotpasswordComponent"],
        canActivate: [_guards_is_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsNotLoggedInGuard"]]
    },
    {
        path: 'reset-password/:id',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"],
        canActivate: [_guards_is_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsNotLoggedInGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  background: #2c2c2c;\n  padding: 30px;\n}\n\nfooter {\n  width: 100%;\n  background: black;\n  color: #fff;\n  font-size: 10pt;\n}\n\n.content {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n\nfooter {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxORVRGVUxMWVxcRGVza3RvcFxcZGV2XFxzcmNcXEZNLkFwcGxpY2F0aW9uXFxDbGllbnRBcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7VUFBQSxjQUFBO0FDQ0o7O0FERUE7RUFDQyxtQkFBQTtVQUFBLGNBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDQ0LCA0NCwgNDQpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG5cdGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcbiIsIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiAjMmMyYzJjO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEwcHQ7XG59XG5cbi5jb250ZW50IHtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbmZvb3RlciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(_authService) {
        this._authService = _authService;
        this.year = new Date().getFullYear();
        this.title = 'ClientApp';
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/token_interceptor.service */ "./src/app/services/token_interceptor.service.ts");
/* harmony import */ var _drive_drive_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./drive/drive.component */ "./src/app/drive/drive.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_is_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/is_not_logged_in.guard */ "./src/app/guards/is_not_logged_in.guard.ts");
/* harmony import */ var _ng_form_upload_ng_form_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ng-form-upload/ng-form-upload.component */ "./src/app/ng-form-upload/ng-form-upload.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _account_changepass_changepass_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./account/changepass/changepass.component */ "./src/app/account/changepass/changepass.component.ts");
/* harmony import */ var _account_deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./account/deleteaccount/deleteaccount.component */ "./src/app/account/deleteaccount/deleteaccount.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _drive_file_history_file_history_file_history_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./drive/file-history/file-history/file-history.component */ "./src/app/drive/file-history/file-history/file-history.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _drive_drive_component__WEBPACK_IMPORTED_MODULE_15__["DriveComponent"],
            _ng_form_upload_ng_form_upload_component__WEBPACK_IMPORTED_MODULE_18__["NgFormUploadComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_20__["AccountComponent"],
            _account_changepass_changepass_component__WEBPACK_IMPORTED_MODULE_21__["ChangepassComponent"],
            _account_deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_22__["DeleteaccountComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__["ForgotpasswordComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_24__["ResetPasswordComponent"],
            _drive_file_history_file_history_file_history_component__WEBPACK_IMPORTED_MODULE_25__["FileHistoryComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_19__["FileUploadModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterModule"].forRoot()
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _guards_is_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_17__["IsNotLoggedInGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptorService"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/drive/Models/fileFilterModel.ts":
/*!*************************************************!*\
  !*** ./src/app/drive/Models/fileFilterModel.ts ***!
  \*************************************************/
/*! exports provided: FileFilterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFilterModel", function() { return FileFilterModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FileFilterModel = class FileFilterModel {
    constructor() { }
};
FileFilterModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FileFilterModel);



/***/ }),

/***/ "./src/app/drive/Models/fileFilters.ts":
/*!*********************************************!*\
  !*** ./src/app/drive/Models/fileFilters.ts ***!
  \*********************************************/
/*! exports provided: FileFiltes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFiltes", function() { return FileFiltes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FileFiltes {
    constructor() { }
}


/***/ }),

/***/ "./src/app/drive/Models/fileModel.ts":
/*!*******************************************!*\
  !*** ./src/app/drive/Models/fileModel.ts ***!
  \*******************************************/
/*! exports provided: FileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModel", function() { return FileModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FileModel {
    constructor(id, name, size, uploadedTime, allowedAnonymous) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.uploadedTime = uploadedTime;
        this.allowedAnonymous = allowedAnonymous;
    }
}


/***/ }),

/***/ "./src/app/drive/drive.component.scss":
/*!********************************************!*\
  !*** ./src/app/drive/drive.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-striped tbody tr {\n  background: #272727;\n  color: #ebebeb;\n  font-size: 9pt;\n}\n\n#details {\n  position: relative;\n  font-weight: 800;\n  text-decoration: none;\n  color: #f8f8f8;\n  top: 3px;\n}\n\n#details:hover {\n  color: #5c66f5;\n  cursor: pointer;\n}\n\n.table-striped tbody tr:nth-child(even) {\n  background-color: #3a3a3a;\n}\n\n.files-top-row {\n  color: #4a6bff;\n  cursor: pointer;\n  font-weight: 800;\n  font-size: 11pt;\n  border-top: none;\n}\n\n.files-top-row:hover {\n  color: #6b86ff;\n}\n\n.list-btn {\n  padding: 0;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\ntable td, .table th {\n  border-top: none;\n  padding: 11px;\n}\n\n.arrow {\n  position: absolute;\n  font-weight: 800;\n  font-size: 15pt;\n  margin-left: -13px;\n  margin-top: -7px;\n}\n\n.form-group {\n  margin-bottom: 0;\n}\n\n.form-group .form-control {\n  height: 10px;\n  width: 100px;\n  border-radius: 2px;\n  border: 1px solid #ced4da;\n  margin-right: 10px;\n}\n\n.form-group .min {\n  margin-bottom: 5px;\n}\n\n.form-group .gray-btn {\n  background: #353535;\n  padding: 3px;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.form-group .gray-btn:hover {\n  background: #1a1a1a;\n}\n\n.form-group .blue-btn {\n  background: #347bff;\n  padding: 3px;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.form-group .blue-btn:hover {\n  background: #2f73f0;\n}\n\n.form-group #datamin {\n  margin-bottom: 5px;\n  width: 150px;\n  height: 25px;\n  border-radius: 2px;\n  border: 1px solid #ced4da;\n  color: #acacac;\n  font-size: 12pt;\n}\n\n.form-group #datamax {\n  width: 150px;\n  height: 25px;\n  border-radius: 2px;\n  border: 1px solid #ced4da;\n  color: #acacac;\n  font-size: 12pt;\n  margin-right: 10px;\n}\n\n.form-group #MaxSize, .form-group #MinSize {\n  height: 25px;\n}\n\n.form-group .filters_row #Name, .form-group .filters_row #Id {\n  width: 140px;\n}\n\n.form-group .table {\n  width: 100px;\n  border: none;\n  margin-bottom: 0;\n  height: 100%;\n}\n\n.form-group .table thead th {\n  border: none;\n}\n\n.form-group .table td, .form-group .table th {\n  padding-right: 1px;\n  padding-left: 1px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.form-group .table .top-headers-row {\n  padding: 0;\n}\n\n.form-group .table .top-headers-row .validate-message {\n  position: absolute;\n  color: #fc2450;\n  margin-left: 120px;\n  font-weight: 500;\n}\n\n.btn {\n  color: #fff;\n  padding: 0;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 10pt;\n  margin-right: 10px;\n}\n\n.btn-blue {\n  background: #347bff;\n  color: #fff;\n}\n\n.btn-blue:hover {\n  background: #2469e7;\n}\n\n.btn-danger {\n  background: #f33030;\n}\n\n.btn-default {\n  background: #ffb327;\n  color: #fff;\n  margin-left: 20px;\n  padding: 0;\n  padding-right: 4px;\n  padding-left: 4px;\n}\n\n.btn-save {\n  position: absolute;\n  margin-left: 20px;\n}\n\n.history {\n  float: left;\n  margin-left: -400px;\n}\n\n.toast {\n  position: absolute;\n  right: 0;\n  color: #5ef550;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpdmUvQzpcXFVzZXJzXFxORVRGVUxMWVxcRGVza3RvcFxcZGV2XFxzcmNcXEZNLkFwcGxpY2F0aW9uXFxDbGllbnRBcHAvc3JjXFxhcHBcXGRyaXZlXFxkcml2ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZHJpdmUvZHJpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ0FKOztBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNBUjs7QURJQTtFQUF5Qyx5QkFBQTtBQ0F6Qzs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDSTtFQUNJLGNBQUE7QUNDUjs7QURHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FER0k7RUFDSSxrQkFBQTtBQ0RSOztBRElJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBRElRO0VBQ0ksbUJBQUE7QUNGWjs7QURNSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKUjs7QURNUTtFQUNJLG1CQUFBO0FDSlo7O0FEUUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDTlI7O0FEU0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUFI7O0FEVUk7RUFDSSxZQUFBO0FDUlI7O0FEWVE7RUFDSSxZQUFBO0FDVlo7O0FEY0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1pSOztBRGNRO0VBQ0ksWUFBQTtBQ1paOztBRGVRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNiWjs7QURnQlE7RUFDSSxVQUFBO0FDZFo7O0FEZ0JZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2RoQjs7QURvQkE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNqQko7O0FEb0JBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDakJKOztBRG1CSTtFQUNJLG1CQUFBO0FDakJSOztBRHFCQTtFQUNJLG1CQUFBO0FDbEJKOztBRHFCQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDbEJKIiwiZmlsZSI6InNyYy9hcHAvZHJpdmUvZHJpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDM5LCAzOSwgMzkpO1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcclxuICAgIGZvbnQtc2l6ZTogOXB0O1xyXG59XHJcblxyXG4jZGV0YWlscyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzVjNjZmNTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTt9XHJcblxyXG4uZmlsZXMtdG9wLXJvdyB7XHJcbiAgICBjb2xvcjogcmdiKDc0LCAxMDcsIDI1NSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiKDEwNywgMTM0LCAyNTUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlzdC1idG4ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWluIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyYXktYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzUzNTM1O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ibHVlLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM0N2JmZjtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmY3M2YwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjZGF0YW1pbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgY29sb3I6ICNhY2FjYWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgfVxyXG5cclxuICAgICNkYXRhbWF4IHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICAgIGNvbG9yOiAjYWNhY2FjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI01heFNpemUsICNNaW5TaXplIHtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlcnNfcm93IHtcclxuICAgICAgICAjTmFtZSwgI0lkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICAgICAgdGhlYWQgdGgge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGQsIHRoIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvcC1oZWFkZXJzLXJvdyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAudmFsaWRhdGUtbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1MiwgMzYsIDgwKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJ0bi1ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgMTIzLCAyNTUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDM2LCAxMDUsIDIzMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDMsIDQ4LCA0OCk7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNzksIDM5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5idG4tc2F2ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmhpc3Rvcnkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQwMHB4O1xyXG59XHJcblxyXG4udG9hc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY29sb3I6IHJnYig5NCwgMjQ1LCA4MCk7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbiIsIi50YWJsZS1zdHJpcGVkIHRib2R5IHRyIHtcbiAgYmFja2dyb3VuZDogIzI3MjcyNztcbiAgY29sb3I6ICNlYmViZWI7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4jZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgdG9wOiAzcHg7XG59XG4jZGV0YWlsczpob3ZlciB7XG4gIGNvbG9yOiAjNWM2NmY1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XG59XG5cbi5maWxlcy10b3Atcm93IHtcbiAgY29sb3I6ICM0YTZiZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxMXB0O1xuICBib3JkZXItdG9wOiBub25lO1xufVxuLmZpbGVzLXRvcC1yb3c6aG92ZXIge1xuICBjb2xvcjogIzZiODZmZjtcbn1cblxuLmxpc3QtYnRuIHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgcGFkZGluZzogMTFweDtcbn1cblxuLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTNweDtcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5mb3JtLWdyb3VwIC5taW4ge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uZm9ybS1ncm91cCAuZ3JheS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMzUzNTM1O1xuICBwYWRkaW5nOiAzcHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cbi5mb3JtLWdyb3VwIC5ncmF5LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XG59XG4uZm9ybS1ncm91cCAuYmx1ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMzQ3YmZmO1xuICBwYWRkaW5nOiAzcHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cbi5mb3JtLWdyb3VwIC5ibHVlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyZjczZjA7XG59XG4uZm9ybS1ncm91cCAjZGF0YW1pbiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cbi5mb3JtLWdyb3VwICNkYXRhbWF4IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmZvcm0tZ3JvdXAgI01heFNpemUsIC5mb3JtLWdyb3VwICNNaW5TaXplIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLmZvcm0tZ3JvdXAgLmZpbHRlcnNfcm93ICNOYW1lLCAuZm9ybS1ncm91cCAuZmlsdGVyc19yb3cgI0lkIHtcbiAgd2lkdGg6IDE0MHB4O1xufVxuLmZvcm0tZ3JvdXAgLnRhYmxlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mb3JtLWdyb3VwIC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5mb3JtLWdyb3VwIC50YWJsZSB0ZCwgLmZvcm0tZ3JvdXAgLnRhYmxlIHRoIHtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmZvcm0tZ3JvdXAgLnRhYmxlIC50b3AtaGVhZGVycy1yb3cge1xuICBwYWRkaW5nOiAwO1xufVxuLmZvcm0tZ3JvdXAgLnRhYmxlIC50b3AtaGVhZGVycy1yb3cgLnZhbGlkYXRlLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmMyNDUwO1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBmb250LXNpemU6IDEwcHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzM0N2JmZjtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLWJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjQ2OWU3O1xufVxuXG4uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNmMzMwMzA7XG59XG5cbi5idG4tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQ6ICNmZmIzMjc7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmJ0bi1zYXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmhpc3Rvcnkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IC00MDBweDtcbn1cblxuLnRvYXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICM1ZWY1NTA7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/drive/drive.component.ts":
/*!******************************************!*\
  !*** ./src/app/drive/drive.component.ts ***!
  \******************************************/
/*! exports provided: DriveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveComponent", function() { return DriveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _Models_fileModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Models/fileModel */ "./src/app/drive/Models/fileModel.ts");
/* harmony import */ var _Models_fileFilterModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Models/fileFilterModel */ "./src/app/drive/Models/fileFilterModel.ts");
/* harmony import */ var _Models_fileFilters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Models/fileFilters */ "./src/app/drive/Models/fileFilters.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");










let DriveComponent = class DriveComponent {
    constructor(http, _fileService, filtersModel, elementRef, _router, toasterService) {
        this.http = http;
        this._fileService = _fileService;
        this.filtersModel = filtersModel;
        this.elementRef = elementRef;
        this._router = _router;
        this.toasterService = toasterService;
        this.filesUrl = "http://cc.filecoreapp.com:80/api/file/files";
        this.page = 1;
        this.sortSymbol = new Array(5);
        this.controlSort = 0;
        this.filters = {
            size: new Array(2),
            uploadTime: new Array(2)
        };
        this.haveFiles = false;
        this._fileId = "";
        this.setId = (fileId) => {
            if (fileId == this._fileId) {
                this._fileId = "";
                return;
            }
            this._fileId = fileId;
        };
        this.files = new Array();
        this.sortSymbol[0] = '&uarr;';
        filtersModel.sortingMode = 1;
        filtersModel.sortingColumn = 'Id';
        filtersModel.pageIndex = 1;
        this.filtersModel.filters = new _Models_fileFilters__WEBPACK_IMPORTED_MODULE_6__["FileFiltes"]();
    }
    ngOnInit() {
        this.loadFiles();
    }
    loadFiles() {
        this._fileService.getFiles(this.filtersModel).subscribe((res) => {
            this.paginationResponseHandler(res);
            this.haveFiles = this.files.length != 0 ? true : false;
        });
    }
    fileHistory(file) {
        this._router.navigate(['drive/file-history/' + file.id]);
    }
    paginationResponseHandler(response) {
        if (response.userFilesLength > 0) {
            this.files = response.files;
            this.files.length = response.userFilesLength;
            this.page = this.filtersModel.pageIndex;
        }
        else {
            for (let i = (this.filtersModel.pageIndex - 1) * 10, j = 0; j < response.files.length; i++) {
                this.files[i] = response.files[j++];
            }
            this.page = this.filtersModel.pageIndex;
        }
    }
    editFile(file) {
        this.editedFile = new _Models_fileModel__WEBPACK_IMPORTED_MODULE_4__["FileModel"](file.id, file.name, file.size, file.uploadedTime, file.allowedAnonymous);
    }
    loadTemplate(file) {
        if (this.editedFile && this.editedFile.id == file.id) {
            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    }
    saveFile() {
        this._fileService.updateFile(this.editedFile).subscribe(res => {
            this.statusMessage = res,
                this.loadFiles();
        });
        this.editedFile = null;
    }
    downloadFile(file) {
        this._fileService.downloadFile(file.id).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(data, file.name);
        }, err => {
            alert("Problem while downloading the file.");
            console.error(err);
        });
    }
    deleteFiles(file) {
        let fileIds = [file.id];
        this._fileService.deleteFiles(fileIds).subscribe(() => {
            this.statusMessage = 'Deleted',
                this.loadFiles();
            --this.files.length;
        });
    }
    cancel() {
        if (this.isNewRecord) {
            this.files.pop();
            this.isNewRecord = false;
        }
        this.editedFile = null;
    }
    shareFile(fileId) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = 'http://localhost:5000/api/file/' + fileId;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toasterService.pop('success', '', 'Link to the file has been copied to clipboard');
    }
    formatFileSize(size) {
        if (size < 1024) {
            return size + ' B';
        }
        else if (size >= 1024 && size < 1024000) {
            return (size / 1000).toFixed(2) + ' KB';
        }
        return (size / 1000000).toFixed(2) + ' MB';
    }
    sort(column, index) {
        if (this.controlSort != index) {
            this.filtersModel.sortingMode = 1;
        }
        else {
            this.filtersModel.sortingMode = this.filtersModel.sortingMode < 2 ? ++this.filtersModel.sortingMode : 0;
        }
        this.filtersModel.sortingColumn = column;
        this._fileService.getFiles(this.filtersModel).subscribe((res) => {
            if (this.filtersModel.pageIndex != 1) {
                for (let i = this.files.length - 1, j = res.files.length - 1; i > 0; i--) {
                    if (this.files[i] != undefined) {
                        this.files[i] = res.files[j--];
                    }
                }
                this.page = this.filtersModel.pageIndex;
            }
            else {
                this.paginationResponseHandler(res);
            }
        });
        this.changeSortArrow(index);
    }
    changeSortArrow(index) {
        for (let i = 0; i < this.sortSymbol.length; i++) {
            this.sortSymbol[i] = '';
        }
        if (this.filtersModel.sortingMode == 1) {
            this.sortSymbol[index] = '&uarr;';
        }
        else if (this.filtersModel.sortingMode == 2) {
            this.sortSymbol[index] = '&darr;';
        }
        this.controlSort = index;
    }
    allowedAnonymousSelect(value) {
        this.filtersModel.filters.allowedAnonymous = value;
        this.applyFilters();
    }
    clearFilters() {
        this.filtersModel = new _Models_fileFilterModel__WEBPACK_IMPORTED_MODULE_5__["FileFilterModel"]();
        this.filtersModel.filters = new _Models_fileFilters__WEBPACK_IMPORTED_MODULE_6__["FileFiltes"]();
        this.filters = {
            size: new Array(2),
            uploadTime: new Array(2)
        };
        this.loadFiles();
    }
    filtersValidate() {
        if (this.filters.size[0] && this.filters.size[1]) {
            if (this.filters.size[1] < this.filters.size[0]) {
                this.validateMessage = "max size cannot be less than min size";
                return false;
            }
            if (this.filters.size[0] < 0.001 || this.filters.size[0] > 51200
                || this.filters.size[1] < 0.001 || this.filters.size[0] > 51200) {
                this.validateMessage = "min size = 0.001 max size = 51200";
                return false;
            }
        }
        if (this.filtersModel.filters.id && !new RegExp('^([a-zA-Z0-9-]){30,50}$').test(this.filtersModel.filters.id)) {
            this.validateMessage = "Invalid id";
            return false;
        }
        if (this.filtersModel.filters.name && this.filtersModel.filters.name.length > 100) {
            this.validateMessage = "Invalid name";
            return false;
        }
        this.validateMessage = "";
        return true;
    }
    applyFilters() {
        if (!this.filtersValidate())
            return;
        this.filtersModel.pageIndex = 1;
        if (this.filters.uploadTime[0] && this.filters.uploadTime[1]) {
            this.filtersModel.filters.uploadTime = new Array(2);
            this.filtersModel.filters.uploadTime[0] = new Date(this.filters.uploadTime[0]).getTime() / 1000;
            this.filtersModel.filters.uploadTime[1] = new Date(this.filters.uploadTime[1]).getTime() / 1000 + 86399;
        }
        else if (!!this.filters.uploadTime[0] != !!this.filters.uploadTime[1]) {
            this.filtersModel.filters.uploadTime = new Array(2);
            this.filtersModel.filters.uploadTime[0] = this.filters.uploadTime[0]
                ? new Date(this.filters.uploadTime[0]).getTime() / 1000 : 1500000000;
            this.filtersModel.filters.uploadTime[1] = this.filters.uploadTime[1]
                ? new Date(this.filters.uploadTime[1]).getTime() / 1000 + 86399
                : new Date(Date.now()).getTime() / 1000;
        }
        else {
            this.filtersModel.filters.uploadTime = null;
        }
        if (this.filters.size[0] && this.filters.size[1]) {
            this.filtersModel.filters.size = new Array(2);
            this.filtersModel.filters.size[0] = this.filters.size[0] * 1000;
            this.filtersModel.filters.size[1] = this.filters.size[1] * 1000;
        }
        else if (!!this.filters.size[0] != !!this.filters.size[1]) {
            this.filtersModel.filters.size = new Array(2);
            this.filtersModel.filters.size[0] = this.filters.size[0] ? this.filters.size[0] * 1000 : 1;
            this.filtersModel.filters.size[1] = this.filters.size[1] ? this.filters.size[1] * 1000 : 51200000;
        }
        else {
            this.filtersModel.filters.size = null;
        }
        this.filtersModel.filters.name = this.filtersModel.filters.name ?
            this.filtersModel.filters.name : null;
        this.filtersModel.filters.id = this.filtersModel.filters.id ?
            this.filtersModel.filters.id : null;
        this._fileService.getFiles(this.filtersModel).subscribe((res) => {
            this.files = res.files;
            this.files.length = res.userFilesLength;
            this.page = 1;
            this.haveFiles = true;
        });
    }
};
DriveComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] },
    { type: _Models_fileFilterModel__WEBPACK_IMPORTED_MODULE_5__["FileFilterModel"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_9__["ToasterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('readOnlyTemplate', { static: false })
], DriveComponent.prototype, "readOnlyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editTemplate', { static: false })
], DriveComponent.prototype, "editTemplate", void 0);
DriveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drive',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drive/drive.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drive.component.scss */ "./src/app/drive/drive.component.scss")).default]
    })
], DriveComponent);



/***/ }),

/***/ "./src/app/drive/file-history/file-history/file-history.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/drive/file-history/file-history/file-history.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\n  z-index: 99;\n}\n\n.table-striped tbody tr {\n  background-color: white;\n}\n\n.table td, .table th {\n  border: none;\n  color: #313131;\n}\n\n.table thead {\n  color: #2b2b2b;\n}\n\n.table-striped tbody tr:nth-child(even) {\n  background-color: #e9e9e9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpdmUvZmlsZS1oaXN0b3J5L2ZpbGUtaGlzdG9yeS9DOlxcVXNlcnNcXE5FVEZVTExZXFxEZXNrdG9wXFxkZXZcXHNyY1xcRk0uQXBwbGljYXRpb25cXENsaWVudEFwcC9zcmNcXGFwcFxcZHJpdmVcXGZpbGUtaGlzdG9yeVxcZmlsZS1oaXN0b3J5XFxmaWxlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RyaXZlL2ZpbGUtaGlzdG9yeS9maWxlLWhpc3RvcnkvZmlsZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFBeUMseUJBQUE7QUNFekMiLCJmaWxlIjoic3JjL2FwcC9kcml2ZS9maWxlLWhpc3RvcnkvZmlsZS1oaXN0b3J5L2ZpbGUtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpXHJcbn1cclxuXHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB7XHJcbiAgICBjb2xvcjogcmdiKDQzLCA0MywgNDMpO1xyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7fSIsIi50YWJsZSB7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzMTMxMzE7XG59XG5cbi50YWJsZSB0aGVhZCB7XG4gIGNvbG9yOiAjMmIyYjJiO1xufVxuXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/drive/file-history/file-history/file-history.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/drive/file-history/file-history/file-history.component.ts ***!
  \***************************************************************************/
/*! exports provided: FileHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHistoryComponent", function() { return FileHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FileHistoryComponent = class FileHistoryComponent {
    constructor(_fileService, _route) {
        this._fileService = _fileService;
        this._route = _route;
        this.page = 1;
        this.pageSize = 5;
        this.options = {
            fileId: "",
            pageIndex: this.page,
            itemsPage: this.pageSize
        };
    }
    ngOnInit() {
        this._route.queryParams.subscribe(params => {
            this.options.fileId = this._route.snapshot.params['id'];
        });
        this.loadHistory();
    }
    loadHistory() {
        this.options.pageIndex = this.page;
        this._fileService.getFileHistories(this.options).subscribe((res) => {
            if (res.history.length == 0) {
                this.hasHistory = "The file has not been downloaded yet";
            }
            this.paginationResponseHandler(res);
        });
    }
    paginationResponseHandler(response) {
        if (response.fileHistoryLength > 0) {
            this.fileHistory = response.history;
            this.fileHistory.length = response.fileHistoryLength;
        }
        else {
            for (let i = (this.page - 1) * this.options.itemsPage, j = 0; j < response.history.length; i++) {
                this.fileHistory[i] = response.history[j++];
            }
        }
    }
};
FileHistoryComponent.ctorParameters = () => [
    { type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
FileHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drive/file-history/file-history/file-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-history.component.scss */ "./src/app/drive/file-history/file-history/file-history.component.scss")).default]
    })
], FileHistoryComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.user = {};
    }
    ngOnInit() {
    }
    sendEmail() {
        this._userService.forgotPasswordUser(this.user)
            .subscribe(res => this.response = res, err => console.log(err));
    }
};
ForgotpasswordComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../shared/styles/form.scss */ "./src/app/shared/styles/form.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/is_not_logged_in.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/guards/is_not_logged_in.guard.ts ***!
  \**************************************************/
/*! exports provided: IsNotLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotLoggedInGuard", function() { return IsNotLoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let IsNotLoggedInGuard = class IsNotLoggedInGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        return !this._authService.loggedIn() ? true : false;
    }
};
IsNotLoggedInGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsNotLoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IsNotLoggedInGuard);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




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
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../shared/styles/loginlogoutform.scss */ "./src/app/shared/styles/loginlogoutform.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/ng-form-upload/ng-form-upload.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ng-form-upload/ng-form-upload.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding-top: 0;\n}\n\n.well {\n  height: 300px;\n  text-align: center;\n  overflow: hidden;\n  padding: 10px;\n}\n\n.well p {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.well:hover strong {\n  color: red;\n}\n\n.well .file_input {\n  cursor: pointer;\n}\n\n.btn {\n  margin-top: 20px;\n  margin-right: 5px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\n.btn-warning {\n  background: #333333;\n  border: 1px solid #333333;\n  color: #fff;\n}\n\n.btn-success {\n  background: #3bbb46;\n}\n\n.table thead th {\n  border: 2px solid #797979;\n}\n\n.table td, .table th {\n  vertical-align: inherit;\n}\n\n.file_input {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  top: -35px;\n}\n\n.panel-body {\n  display: inline-block;\n  padding: 10px;\n  padding-top: 25px;\n  position: absolute;\n}\n\n.table_container {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctZm9ybS11cGxvYWQvQzpcXFVzZXJzXFxORVRGVUxMWVxcRGVza3RvcFxcZGV2XFxzcmNcXEZNLkFwcGxpY2F0aW9uXFxDbGllbnRBcHAvc3JjXFxhcHBcXG5nLWZvcm0tdXBsb2FkXFxuZy1mb3JtLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmctZm9ybS11cGxvYWQvbmctZm9ybS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNGSjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDRlI7O0FES0k7RUFDSSxVQUFBO0FDSFI7O0FETUk7RUFDSSxlQUFBO0FDSlI7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBckNnQjtFQXNDaEIseUJBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUE7RUFDSSxtQkExQ2lCO0FDcUNyQjs7QURRQTtFQUNJLHlCQUFBO0FDTEo7O0FEUUE7RUFDSSx1QkFBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDTEo7O0FEUUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvbmctZm9ybS11cGxvYWQvbmctZm9ybS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY3VzdG9tX2dyYXlfY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuJGN1c3RvbV9ncmVlbl9jb2xvcjogcmdiKDU5LCAxODcsIDcwKTtcclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi53ZWxsIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIgc3Ryb25nIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWxlX2lucHV0IHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5idG4td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY3VzdG9tX2dyYXlfY29sb3I7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY3VzdG9tX2dyYXlfY29sb3I7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQ6ICRjdXN0b21fZ3JlZW5fY29sb3I7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTIxLCAxMjEsIDEyMSk7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xyXG59XHJcblxyXG4uZmlsZV9pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0b3A6IC0zNXB4O1xyXG59XHJcblxyXG4ucGFuZWwtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50YWJsZV9jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuIiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ud2VsbCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi53ZWxsIHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLndlbGw6aG92ZXIgc3Ryb25nIHtcbiAgY29sb3I6IHJlZDtcbn1cbi53ZWxsIC5maWxlX2lucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi5idG4td2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjM2JiYjQ2O1xufVxuXG4udGFibGUgdGhlYWQgdGgge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNzk3OTc5O1xufVxuXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xufVxuXG4uZmlsZV9pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAtMzVweDtcbn1cblxuLnBhbmVsLWJvZHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50YWJsZV9jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ng-form-upload/ng-form-upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ng-form-upload/ng-form-upload.component.ts ***!
  \************************************************************/
/*! exports provided: NgFormUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormUploadComponent", function() { return NgFormUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






const URL = 'http://cc.filecoreapp.com:80/api/file/';
let NgFormUploadComponent = class NgFormUploadComponent {
    constructor(authService, _router, http) {
        this.authService = authService;
        this._router = _router;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: URL,
            formatDataFunction: (item) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                return http.post(URL, item);
            })
        });
        this.uploader.onSuccessItem = (item, response, status) => this.onSuccessItem(item, response);
        this.uploader.onErrorItem = (item, response, status) => this.onErrorItem(item, response, status);
        this.hasBaseDropZoneOver = false;
        this.addHeaders();
    }
    onSuccessItem(item, response) {
        this.response = response;
        this.responseColor = 'green';
    }
    onErrorItem(item, response, status) {
        if (status >= 400) {
            this.response = response;
            this.responseColor = 'red';
            if (status == 401) {
                this.authService.refreshToken()
                    .subscribe(() => this.handle401Error(), () => this._router.navigate(['/login']));
            }
        }
    }
    handle401Error() {
        for (let i = 0; i < this.uploader.queue.length; i++) {
            this.uploader.queue[i].isUploaded = false;
        }
        this.addHeaders();
        this.uploader.uploadAll();
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
NgFormUploadComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
NgFormUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ng-form-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ng-form-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng-form-upload/ng-form-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ng-form-upload.component.scss */ "./src/app/ng-form-upload/ng-form-upload.component.scss")).default]
    })
], NgFormUploadComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(_auth, _router, _userService) {
        this._auth = _auth;
        this._router = _router;
        this._userService = _userService;
        this.registerUserData = {};
    }
    ngOnInit() {
    }
    registerUser() {
        this._userService.registerUser(this.registerUserData);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../shared/styles/loginlogoutform.scss */ "./src/app/shared/styles/loginlogoutform.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(_route, _userService, _authService) {
        this._route = _route;
        this._userService = _userService;
        this._authService = _authService;
        this.user = {
            id: "",
            code: ""
        };
    }
    ngOnInit() {
        this._route.queryParams.subscribe(params => {
            this.user.id = this._route.snapshot.params['id'];
            this.user.code = params['code'].replace(/\s/g, '+');
        });
    }
    resetPassword() {
        this._userService.resetPasswordUser(this.user)
            .subscribe(res => {
            this.response = res;
            setTimeout(() => {
                this._authService.logoutUser();
            }, 1000);
        }, err => console.log(err));
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../shared/styles/form.scss */ "./src/app/shared/styles/form.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/reset-password/reset-password.component.scss")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthService = class AuthService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this.apiUrl = "http://cc.filecoreapp.com:88";
        this.registerUrl = `${this.apiUrl}/api/users`;
        this.tokenEndpoint = `${this.apiUrl}/connect/token`;
    }
    registerUser(user) {
        return this.http.post(this.registerUrl, user);
    }
    loginUser(user) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                grant_type: 'password',
                username: user.username,
                password: user.password,
                client_id: 'Web',
                client_secret: 'secret'
            }
        });
        return this.http.post(this.tokenEndpoint, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(tokens => this.storeTokens(tokens)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }));
    }
    logoutUser() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this._router.navigate(['/login']);
    }
    getAccessToken() {
        return localStorage.getItem('access_token');
    }
    getRefreshToken() {
        return localStorage.getItem('refresh_token');
    }
    getExpireAtToken() {
        return localStorage.getItem('expiresAt');
    }
    loggedIn() {
        return !!localStorage.getItem('access_token');
    }
    storeTokens(tokens) {
        let expiresAt = (new Date().getTime() + tokens.expires_in * 1000);
        localStorage.setItem('expiresAt', expiresAt.toString());
        localStorage.setItem('access_token', tokens.access_token);
        localStorage.setItem('refresh_token', tokens.refresh_token);
    }
    refreshToken() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                grant_type: 'refresh_token',
                refresh_token: this.getRefreshToken(),
                client_id: 'Web',
                client_secret: 'secret'
            }
        });
        return this.http.post(this.tokenEndpoint, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((tokens) => this.storeTokens(tokens)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            this.logoutUser();
            this._router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FileService = class FileService {
    constructor(_http) {
        this._http = _http;
        this.url = 'http://cc.filecoreapp.com:80/api/file/';
        this.fileHistoryUrl = 'http://cc.filecoreapp.com:80/api/filehistory/';
    }
    getFiles(options) {
        return this._http.post(this.url + 'files', options);
    }
    getFileHistories(options) {
        return this._http.get(this.fileHistoryUrl + options.fileId + '/' + options.pageIndex + '/' + options.itemsPage);
    }
    deleteFiles(fileIds) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: fileIds
        };
        return this._http.delete(this.url, options);
    }
    updateFile(file) {
        return this._http.put(this.url, file);
    }
    downloadFile(fileId) {
        return this._http.get(this.url + fileId, {
            responseType: "blob"
        });
    }
};
FileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FileService);



/***/ }),

/***/ "./src/app/services/token_interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token_interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");






let TokenInterceptorService = class TokenInterceptorService {
    constructor(authService) {
        this.authService = authService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    intercept(request, next) {
        if (this.authService.getAccessToken()) {
            request = this.addToken(request, this.authService.getAccessToken());
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 401) {
                return this.handle401Error(request, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }
        }));
    }
    addToken(request, token) {
        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
                this.isRefreshing = false;
                this.refreshTokenSubject.next(this.authService.getAccessToken());
                return next.handle(this.addToken(request, this.authService.getAccessToken()));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(token => token != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(access_token => {
                return next.handle(this.addToken(request, access_token));
            }));
        }
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let UserService = class UserService {
    constructor(_auth, _router, _http) {
        this._auth = _auth;
        this._router = _router;
        this._http = _http;
        this.URL = 'http://cc.filecoreapp.com:88/api/users/';
    }
    registerUser(registerUserData) {
        this._auth.registerUser(registerUserData)
            .subscribe(result => {
            this._router.navigate(['/login']);
        }, err => console.log(err));
    }
    changePasswordUser(changePasswordUserData) {
        return this._http.put(this.URL, changePasswordUserData);
    }
    deleteUser(passwordUserData) {
        return this._http.delete(this.URL + passwordUserData.value);
    }
    forgotPasswordUser(user) {
        return this._http.post(this.URL + 'forgotpass', user);
    }
    resetPasswordUser(passwordsWithCode) {
        return this._http.post(this.URL + 'resetpass', passwordsWithCode);
    }
};
UserService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/shared/styles/form.scss":
/*!*****************************************!*\
  !*** ./src/app/shared/styles/form.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".separator {\n  border-right: 1px solid #dfdfe0;\n}\n\n.icon-btn-save {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.input-group {\n  margin-bottom: 10px;\n  width: 600px;\n}\n\n.input-group .alert-message {\n  margin-left: 20px;\n  padding: 10px;\n  font-size: 12pt;\n  color: #fa2c2c;\n}\n\n.btn {\n  padding: 3px;\n  padding-right: 25px;\n  padding-left: 25px;\n  background: #347bff;\n  color: #fff;\n  border: none;\n}\n\n.btn:hover {\n  background: #2469e7;\n}\n\n.form-control {\n  border-radius: 2px;\n  border: 1px solid #ced4da;\n  max-width: 265px;\n  height: 40px;\n}\n\n.response {\n  margin-top: 15px;\n  color: #18fc64;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9DOlxcVXNlcnNcXE5FVEZVTExZXFxEZXNrdG9wXFxkZXZcXHNyY1xcRk0uQXBwbGljYXRpb25cXENsaWVudEFwcC9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm0uc2NzcyIsInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9mb3JtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSwrQkFBQTtBQ0FSOztBREdJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQVI7O0FER0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNBUjs7QURFUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQVo7O0FESUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNEUjs7QURHUTtFQUNJLG1CQUFBO0FDRFo7O0FES0k7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRlI7O0FES0k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdHlsZXMvZm9ybS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuc2VwYXJhdG9yIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZkZmUwOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmljb24tYnRuLXNhdmUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG5cclxuICAgICAgICAuYWxlcnQtbWVzc2FnZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjUwLCA0NCwgNDQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDUyLCAxMjMsIDI1NSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDM2LCAxMDUsIDIzMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICAgIG1heC13aWR0aDogMjY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXNwb25zZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBjb2xvcjogcmdiKDI0LCAyNTIsIDEwMCk7XHJcbiAgICB9XHJcblxyXG4iLCIuc2VwYXJhdG9yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZlMDtcbn1cblxuLmljb24tYnRuLXNhdmUge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cbi5pbnB1dC1ncm91cCAuYWxlcnQtbWVzc2FnZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEycHQ7XG4gIGNvbG9yOiAjZmEyYzJjO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMzNDdiZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG59XG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI0NjllNztcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgbWF4LXdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ucmVzcG9uc2Uge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogIzE4ZmM2NDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/styles/loginlogoutform.scss":
/*!****************************************************!*\
  !*** ./src/app/shared/styles/loginlogoutform.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-message {\n  font-size: 10pt;\n  color: #f74242;\n  position: absolute;\n  margin-top: 6px;\n}\n\n.text {\n  margin-top: 25px;\n}\n\n.reg-form {\n  padding-top: 10px;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\n/*-- main --*/\n\n.main-w3layouts {\n  padding: 3em 0 1em;\n}\n\n.main-agileinfo {\n  width: 35%;\n  min-width: 357px;\n  margin: 3em auto;\n  background: rgba(0, 0, 0, 0.6);\n  background-size: cover;\n}\n\n.agileits-top {\n  padding: 3em;\n  font-size: 0.9em;\n}\n\n.text:focus, .text:valid {\n  box-shadow: none;\n  outline: none;\n}\n\n.text:focus::-webkit-input-placeholder, .text:valid::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.9em;\n  -webkit-transform: translateY(-30px);\n  transform: translateY(-30px);\n  visibility: visible !important;\n}\n\n::-webkit-input-placeholder {\n  color: #fff;\n  font-weight: 100;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff;\n}\n\n:-ms-input-placeholder {\n  color: #fff;\n}\n\ninput[type=submit] {\n  font-size: 0.9em;\n  color: #fff;\n  background: #76b852;\n  outline: none;\n  border: 1px solid #76b852;\n  cursor: pointer;\n  padding: 0.9em;\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 2em 0;\n  letter-spacing: 4px;\n}\n\ninput[type=submit]:hover {\n  -webkit-transition: 0.5s all;\n  transition: 0.5s all;\n  background: #8DC26F;\n}\n\n.agileits-top p {\n  font-size: 1em;\n  color: #fff;\n  text-align: center;\n  letter-spacing: 1px;\n  font-weight: 300;\n}\n\n.agileits-top p a {\n  color: #fff;\n  -webkit-transition: 0.5s all;\n  transition: 0.5s all;\n  font-weight: 400;\n}\n\n.agileits-top p a:hover {\n  color: #76b852;\n}\n\n@-webkit-keyframes rippling {\n  50% {\n    border-left-color: #fff;\n  }\n  100% {\n    border-bottom-color: #fff;\n    border-left-color: #fff;\n  }\n}\n\n@keyframes rippling {\n  50% {\n    border-left-color: #fff;\n  }\n  100% {\n    border-bottom-color: #fff;\n    border-left-color: #fff;\n  }\n}\n\n/*-- //checkbox --*/\n\n/*-- copyright --*/\n\n.colorlibcopy-agile {\n  margin: 2em 0 1em;\n  text-align: center;\n}\n\n.colorlibcopy-agile p {\n  font-size: 0.9em;\n  color: #fff;\n  line-height: 1.8em;\n  letter-spacing: 1px;\n  font-weight: 100;\n}\n\n.colorlibcopy-agile p a {\n  color: #fff;\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -ms-transition: 0.5s all;\n}\n\n.colorlibcopy-agile p a:hover {\n  color: #000;\n}\n\n/*-- //copyright --*/\n\n.wrapper {\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9DOlxcVXNlcnNcXE5FVEZVTExZXFxEZXNrdG9wXFxkZXZcXHNyY1xcRk0uQXBwbGljYXRpb25cXENsaWVudEFwcC9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGxvZ2lubG9nb3V0Zm9ybS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL2xvZ2lubG9nb3V0Zm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFRSxhQUFBOztBQUNBO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUlBLDRCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLDRCQUFBO0VBSUEsb0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUNFO0lBQ0UsdUJBQUE7RUNDSjtFREVFO0lBQ0UseUJBQUE7SUFDQSx1QkFBQTtFQ0FKO0FBQ0Y7O0FEUkU7RUFDRTtJQUNFLHVCQUFBO0VDQ0o7RURFRTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUNBSjtBQUNGOztBREdFLG1CQUFBOztBQUNBLGtCQUFBOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtBQ0RKOztBRElFLG9CQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N0eWxlcy9sb2dpbmxvZ291dGZvcm0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIGNvbG9yOiAjZjc0MjQyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ucmVnLWZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsIHEge1xyXG4gICAgcXVvdGVzOiBub25lO1xyXG4gIH1cclxuICBcclxuICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKi0tIG1haW4gLS0qL1xyXG4gIC5tYWluLXczbGF5b3V0cyB7XHJcbiAgICBwYWRkaW5nOiAzZW0gMCAxZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLWFnaWxlaW5mbyB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgbWluLXdpZHRoOiAzNTdweDtcclxuICAgIG1hcmdpbjogM2VtIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAuYWdpbGVpdHMtdG9wIHtcclxuICAgIHBhZGRpbmc6IDNlbTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0OmZvY3VzLCAudGV4dDp2YWxpZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC50ZXh0OnZhbGlkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxuICBcclxuICA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBGaXJlZm94IDE4LSAqL1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzZiODUyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NmI4NTI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjllbTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogLjVzIGFsbDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcclxuICAgIGJhY2tncm91bmQ6ICM4REMyNkY7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZ2lsZWl0cy10b3AgcCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZ2lsZWl0cy10b3AgcCBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZ2lsZWl0cy10b3AgcCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNzZiODUyO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHJpcHBsaW5nIHtcclxuICAgIDUwJSB7XHJcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKi0tIC8vY2hlY2tib3ggLS0qL1xyXG4gIC8qLS0gY29weXJpZ2h0IC0tKi9cclxuICAuY29sb3JsaWJjb3B5LWFnaWxlIHtcclxuICAgIG1hcmdpbjogMmVtIDAgMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY29sb3JsaWJjb3B5LWFnaWxlIHAge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbG9ybGliY29weS1hZ2lsZSBwIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xvcmxpYmNvcHktYWdpbGUgcCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAvKi0tIC8vY29weXJpZ2h0IC0tKi9cclxuICAud3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH0iLCIuYWxlcnQtbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgY29sb3I6ICNmNzQyNDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5yZWctZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG4vKi0tIG1haW4gLS0qL1xuLm1haW4tdzNsYXlvdXRzIHtcbiAgcGFkZGluZzogM2VtIDAgMWVtO1xufVxuXG4ubWFpbi1hZ2lsZWluZm8ge1xuICB3aWR0aDogMzUlO1xuICBtaW4td2lkdGg6IDM1N3B4O1xuICBtYXJnaW46IDNlbSBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hZ2lsZWl0cy10b3Age1xuICBwYWRkaW5nOiAzZW07XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi50ZXh0OmZvY3VzLCAudGV4dDp2YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50ZXh0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCAudGV4dDp2YWxpZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogI2ZmZjtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6ICNmZmY7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM3NmI4NTI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NmI4NTI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC45ZW07XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMmVtIDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIC1vLXRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAtbXMtdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xuICBiYWNrZ3JvdW5kOiAjOERDMjZGO1xufVxuXG4uYWdpbGVpdHMtdG9wIHAge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFnaWxlaXRzLXRvcCBwIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5hZ2lsZWl0cy10b3AgcCBhOmhvdmVyIHtcbiAgY29sb3I6ICM3NmI4NTI7XG59XG5cbkBrZXlmcmFtZXMgcmlwcGxpbmcge1xuICA1MCUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmY7XG4gIH1cbn1cbi8qLS0gLy9jaGVja2JveCAtLSovXG4vKi0tIGNvcHlyaWdodCAtLSovXG4uY29sb3JsaWJjb3B5LWFnaWxlIHtcbiAgbWFyZ2luOiAyZW0gMCAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbG9ybGliY29weS1hZ2lsZSBwIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmNvbG9ybGliY29weS1hZ2lsZSBwIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIC1vLXRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAtbXMtdHJhbnNpdGlvbjogMC41cyBhbGw7XG59XG5cbi5jb2xvcmxpYmNvcHktYWdpbGUgcCBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qLS0gLy9jb3B5cmlnaHQgLS0qL1xuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NETFULLY\Desktop\dev\src\FM.Application\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map