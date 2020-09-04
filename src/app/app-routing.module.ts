import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from "./login/login.component";
import {SignupComponent } from "./signup/signup.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ForgotpasswordComponent} from "./forgotpassword/forgotpassword.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {CompareComponent} from "./compare/compare.component";
import {RedsamComponent} from "./redsam/redsam.component";
import {OnerealComponent} from './onereal/onereal.component';
import {OnesamComponent} from './onesam/onesam.component';
import {RedrealComponent} from './redreal/redreal.component';
import {RedoneComponent} from './redone/redone.component';
import {RealsamComponent} from './realsam/realsam.component';
import {BuyComponent} from './buy/buy.component';
import {LogoutComponent} from './logout/logout.component';
import {DeleteComponent} from './delete/delete.component';
import {Buy1Component} from './buy1/buy1.component';
import {Buy2Component} from './buy2/buy2.component';
import {Buy3Component} from './buy3/buy3.component';




const routes: Routes = [{path:"signup",component:SignupComponent},{path:"delete",component:DeleteComponent},{path:"logout",component:LogoutComponent},{path:"buy",component:BuyComponent},{path:"buy1",component:Buy1Component},{path:"buy2",component:Buy2Component},{path:"buy3",component:Buy3Component},{path:"login", component:LoginComponent},{path: "homepage",component: HomepageComponent},{path: "forgotpassword",component: ForgotpasswordComponent},{path:"redsam" ,component: RedsamComponent},{path:"onereal" ,component: OnerealComponent},{path:"compare", component:CompareComponent},{path:"onesam", component:OnesamComponent},{path:"redreal", component:RedrealComponent},{path:"realsam",component:RealsamComponent},{path: "redone",component: RedoneComponent},{path:"" ,redirectTo: '/login',pathMatch:'full'},{path:"**" ,component: PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
