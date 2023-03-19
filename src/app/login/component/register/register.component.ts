import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {LoginRequest} from "../../model/loginRequest";
import {RegisterRequest} from "../../model/registerRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  dataForm = this.fb.group({
    userName: ['',Validators.required],
    password: [''],
    email: [''],
    phoneNumber: [''],
    fullName: [''],
    confirmPassword: ['']
  })
  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    const registerRequest: RegisterRequest = this.dataForm.value as RegisterRequest;
    if(this.dataForm.value.confirmPassword != this.dataForm.value.password){
      alert('Mật khẩu không khớp!!');
      return;
    }
    this.loginService.Register(registerRequest).subscribe(res =>{
      if(res === true){
        alert("Đăng kí thành công!")
        this.route.navigate(['/login/sign-in'])
      }
    },error => {
      console.log(error)
      }
    )
  };



}
