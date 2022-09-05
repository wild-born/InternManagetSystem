import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './Login.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  user!: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    this.user = this.fb.group({
  mail: ["", Validators.required],
  password: ["", Validators.required],
    })
  }
  login(){
    console.log("login",this.user.value);
    this.loginService.login(this.user.value).subscribe(response=>{
      console.log("Login Success",response);
      if(response == true)
      {
        alert("Login Success")
       this.route.navigate(['/Home']);
             }
             else{
               alert("Incorrect ID or Password")
        console.log("Login failed",response);
      }
    });
  }
}
