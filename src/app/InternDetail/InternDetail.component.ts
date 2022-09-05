import { Component, OnInit } from '@angular/core';
import { InternDetailService } from './InternDetail.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-InternDetail',
  templateUrl: './InternDetail.component.html',
  styleUrls: ['./InternDetail.component.css']
})
export class InternDetailComponent implements OnInit {
  user!: FormGroup;
  email:any;
  data:any;
  savresp:any;

  constructor(private fb: FormBuilder, private InternDetailService: InternDetailService,
    private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getdetails();

  }
  getdetails(){
    this.InternDetailService.vdetails().subscribe(response=>{
       console.log("InternDetails",response);
      this.data = response;
    });

  }
  cut(itme:any){
    this.InternDetailService.delete(itme.s_No).subscribe(response=>
      {
        console.log("InternDetails",response);
        alert("Delete Permanently?")
        this.data = response;
        this.getdetails();
      });
}
  updateform = new FormGroup({
    s_No:new FormControl("",Validators.required),
    internId : new FormControl("",Validators.required),
    internName : new FormControl("",Validators.required),
    phoneNo : new FormControl("",Validators.required),
    mailId : new FormControl("",Validators.required),
    address1 : new FormControl("",Validators.required)
});
      modify(){
        this.InternDetailService.modifyall(this.updateform.value.s_No, this.updateform.value).subscribe(

          result=>{this.savresp=result;

          });
          this.route.navigate(['/Register']);





}

}
