import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token_interceptor.service';
import { DriveComponent } from './drive/drive.component';
import { AuthGuard } from './guards/auth.guard';
import { IsNotLoggedInGuard } from './guards/is_not_logged_in.guard';
import { NgFormUploadComponent } from './ng-form-upload/ng-form-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AccountComponent } from './account/account.component';
import { ChangepassComponent } from './account/changepass/changepass.component';
import { DeleteaccountComponent } from './account/deleteaccount/deleteaccount.component';
import { ForgotpasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FileFilterModel } from './drive/Models/FileFilterModel';
import { FileHistoryComponent } from './drive/file-history/file-history/file-history.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DriveComponent,
    NgFormUploadComponent,
    AccountComponent,
    ChangepassComponent,
    DeleteaccountComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    FileHistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    NgxPaginationModule
  ],
  providers: [AuthService, AuthGuard, IsNotLoggedInGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
