import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Course} from "../../models/course";

@Injectable({
  providedIn: 'root'
})
export class LeaningService {

  _idCourseSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  idCourse$ : Observable<string> = this._idCourseSubject.asObservable();
  constructor(private httpClient: HttpClient) { }
  getCourse = (id: string) => this.httpClient.get<Course>(`${environment.api_domain}/Course/get-course/${id}`)
}
