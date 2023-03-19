import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import {LeaningService} from "./services/leaning.service";
import {Course} from "../models/course";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  isToggleSidenavMobile = false;
  idCourse = ''
  course: Course = {
    courseId : '',
    title : '',
    description : '',
    lessons:[]
  };
  constructor(private learningService: LeaningService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.learningService.idCourse$.subscribe(id => this.idCourse = id);
    if(this.idCourse === '') {
      this.router.navigate([''])
    }else {
      this.learningService.getCourse(this.idCourse).subscribe(res => {
        this.course = res;
      })
    }
  }

  toggleSidenav() {
    this.isToggleSidenavMobile = !this.isToggleSidenavMobile;
  }

  handleBack() {
    this.location.back();
  }
}
