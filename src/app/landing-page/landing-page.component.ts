import {Component, OnInit, ViewChild} from '@angular/core';
import {LandingServiceService} from "./services/landing-service.service";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('rightSidenav') drawer!: MatDrawer;

  constructor(private _landingService: LandingServiceService) {
  }

  isAccount = false;
  elementActive = '';
  listMenu = [
    {
      name: "Home",
      icon: 'fa-solid fa-house'
    },
    {
      name: "Lộ trình",
      icon: 'fa-solid fa-road',
    },
    {
      name: "Học",
      icon: 'fa-solid fa-lightbulb',
    },
    {
      name: "Blog",
      icon: 'fa-solid fa-newspaper'
    }
  ]
  isSideNav = false;
  tmp = true;

  ngOnInit(): void {
    this.elementActive = this.listMenu[0].name;
    this._landingService.toggleSideNav$.subscribe(isBoolean => this.isSideNav = isBoolean);
  }

  handleClick(name: string) {
    this.elementActive = name;
  }


  toggleSideNav(e:boolean) {
    if(!e){
      this._landingService.toggleSideNav();
    }
  }
}
