import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CompareComponent } from './compare/compare.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RedsamComponent } from './redsam/redsam.component';
import { OnerealComponent } from './onereal/onereal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OnesamComponent } from './onesam/onesam.component';
import { RedrealComponent } from './redreal/redreal.component';
import { RedoneComponent } from './redone/redone.component';
import { RealsamComponent } from './realsam/realsam.component';
import { BuyComponent } from './buy/buy.component';
import { LogoutComponent } from './logout/logout.component';
import { DeleteComponent } from './delete/delete.component';
import { Buy1Component } from './buy1/buy1.component';
import { Buy2Component } from './buy2/buy2.component';
import { Buy3Component } from './buy3/buy3.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    ForgotpasswordComponent,
    PagenotfoundComponent,
    CompareComponent,
    RedsamComponent,
    OnerealComponent,
    OnesamComponent,
    RedrealComponent,
    RedoneComponent,
    RealsamComponent,
    BuyComponent,
    LogoutComponent,
    DeleteComponent,
    Buy1Component,
    Buy2Component,
    Buy3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
