import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page.component";
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  {path: '',component: LandingPageComponent,
    children :[
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
