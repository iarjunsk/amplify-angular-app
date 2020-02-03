import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AppRoutingModule } from './app-routing.module';

// interceptors & auth-gaurd
import { HttpInterceptorProviders} from './interceptors/interceptor-provider';
import { AuthGuard } from './auth.guard';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    BrowserAnimationsModule, // required animations module

    NgxSpinnerModule
  ],
  providers: [
    AmplifyService,
    AuthGuard,
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
