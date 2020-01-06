import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { DriveComponent } from './drive/drive.component';
import { AuthGuard } from './guards/auth.guard';
import { IsNotLoggedInGuard } from './guards/is_not_logged_in.guard';
import { NgFormUploadComponent } from './ng-form-upload/ng-form-upload.component';
import { AccountComponent } from './account/account.component';
import { DeleteaccountComponent } from './account/deleteaccount/deleteaccount.component';
import { ChangepassComponent } from './account/changepass/changepass.component';
import { ForgotpasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FileHistoryComponent } from './drive/file-history/file-history/file-history.component';

const accountChildRoutes: Routes = [
  { path: 'changepass', component: ChangepassComponent},
  { path: 'deleteaccount', component: DeleteaccountComponent},
];

const driveChildRoutes: Routes = [
  { path: 'file-history/:id', component: FileHistoryComponent }
]

const routes: Routes = [
  { 
    path: '',  
    redirectTo: '/login',
    pathMatch: 'full',
    canActivate: [IsNotLoggedInGuard]
  },
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
    children: driveChildRoutes,
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
    children: accountChildRoutes,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent,
    canActivate: [IsNotLoggedInGuard]
  },
  {
    path: 'reset-password/:id',
    component: ResetPasswordComponent,
    canActivate: [IsNotLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
