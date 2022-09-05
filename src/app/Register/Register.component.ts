import { Component, OnInit } from '@angular/core';
import { RegisterService } from './Register.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  user!: FormGroup;
  constructor(private fb: FormBuilder, private RegisterService: RegisterService, private route: Router) { }

  ngOnInit() {

    this.user = this.fb.group({

      internId: ["", Validators.required],
      internName: ["", Validators.required],
      phoneNo: ["", Validators.required],
      mailId: ["", Validators.required],
      address1: ["", Validators.required],
      password: ["",Validators.required]
                              })
              }
      SignUp()
      {
        console.log("SignUp",this.user.value);
        this.RegisterService.SignUp(this.user.value).subscribe(response=>{
          console.log("response from SigUp",response);
        });
        this.route.navigate(['/Login']);
}
register()
{
  console.log("SignUp",this.user.value);
        this.RegisterService.modify(this.user.value).subscribe(response=>{
          console.log("response from SigUp",response);
        });
        this.route.navigate(['Home/InternDetails']);

}
}
