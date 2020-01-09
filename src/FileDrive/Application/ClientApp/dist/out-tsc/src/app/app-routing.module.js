import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DriveComponent } from './drive/drive.component';
import { AuthGuard } from './guards/auth.guard';
import { IsNotLoggedInGuard } from './guards/is_not_logged_in.guard';
import { NgFormUploadComponent } from './ng-form-upload/ng-form-upload.component';
import { AccountComponent } from './account/account.component';
const routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [IsNotLoggedInGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [IsNotLoggedInGuard]
    },
    {
        path: 'drive',
        component: DriveComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'upload-files',
        component: NgFormUploadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map