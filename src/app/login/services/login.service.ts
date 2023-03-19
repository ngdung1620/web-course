import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../model/loginRequest";
import {LoginResponse} from "../model/loginResponse";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {RegisterRequest} from "../model/registerRequest";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  SignIn = (data: LoginRequest) => this.httpClient.post<LoginResponse>(`${environment.api_domain}/Authentication/login`,data);
  Register = (data: RegisterRequest) => this.httpClient.post<Boolean>(`${environment.api_domain}/Authentication/registration`,data)
}
