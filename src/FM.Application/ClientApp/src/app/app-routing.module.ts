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

const accountChildRoutes: Routes = [
  { path: 'changepass', component: ChangepassComponent},
  { path: 'deleteaccount', component: DeleteaccountComponent},
];

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
