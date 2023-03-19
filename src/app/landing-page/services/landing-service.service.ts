import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CombinedCourseRespone} from "../models/combinedCourseRespone";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LandingServiceService {
    _toggleSideNavSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    toggleSideNav$ : Observable<boolean> = this._toggleSideNavSubject.asObservable();


  constructor(private httpClient: HttpClient) { }
  toggleSideNav(){
    let tmp;
    this.toggleSideNav$.subscribe(isBoolean => tmp = isBoolean);
    this._toggleSideNavSubject.next(!tmp);
  }
  getListCombinedCourse = () => this.httpClient.get<CombinedCourseRespone[]>(`${environment.api_domain}/CombinedCourse/list-combine-course`);
}
