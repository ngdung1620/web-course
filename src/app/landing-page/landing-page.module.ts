import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './component/home/home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import { ContentComponent } from './component/content/content.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HomeComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatSidenavModule,
    MatIconModule,
    NgxUsefulSwiperModule,
  ]
})
export class LandingPageModule { }
