import { Component, OnInit } from '@angular/core';
import {LandingServiceService} from "../../services/landing-service.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  isAccount = false;
  elementActive = '';
  listMenu = [
    {
      name: "Home",
      icon:'fa-solid fa-house'
    },
    {
      name: "Lộ trình",
      icon: 'fa-solid fa-road',
    },
    {
      name: "Học",
      icon:'fa-solid fa-lightbulb',
    },
    {
      name: "Blog",
      icon: 'fa-solid fa-newspaper'
    }
  ]
  constructor(private _landingService: LandingServiceService) {
  }
  ToggleAccount() {
    this.isAccount = !this.isAccount;
  }

  ngOnInit(): void {
    this.elementActive = this.listMenu[0].name;
  }

  handleClick(name: string) {
    this.elementActive = name;
  }


  toggleSideNav() {
    this._landingService.toggleSideNav();
  }
}
