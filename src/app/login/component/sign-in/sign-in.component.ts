import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {LoginRequest} from "../../model/loginRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  dataForm = this.fb.group({
    userName: [''],
    password: ['']
  })
  constructor(private fb: FormBuilder, private loginService: LoginService,private route: Router) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    const loginRequest: LoginRequest = this.dataForm.value as LoginRequest;
    this.loginService.SignIn(loginRequest).subscribe(res => {
      if(res.token){
        this.route.navigate(['/home']);
      }
    },error => {
      console.log(error)
    });
  }
}
