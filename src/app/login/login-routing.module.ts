import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login.component";
import {SignInComponent} from "./component/sign-in/sign-in.component";
import {RegisterComponent} from "./component/register/register.component";

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    children: [
      {path:"", component: SignInComponent},
      {path:'sign-in', component: SignInComponent},
      {path:'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
