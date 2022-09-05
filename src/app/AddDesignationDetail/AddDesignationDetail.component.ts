import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AddDesignationDetailService } from './AddDesignationDetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddDesignationDetail',
  templateUrl: './AddDesignationDetail.component.html',
  styleUrls: ['./AddDesignationDetail.component.css']
})
export class AddDesignationDetailComponent implements OnInit {
  user!: FormGroup;
  data:any;
  savresp:any;
  constructor(private service:AddDesignationDetailService,private route: Router) { }

  ngOnInit() {
  }
  addform = new FormGroup({
    designationId : new FormControl("",Validators.required),
    designationName : new FormControl("",Validators.required),
    departmentName : new FormControl("",Validators.required),
    companyMonthlyHour : new FormControl("",Validators.required),
    internMonthlyHour : new FormControl("",Validators.required),
    status : new FormControl("",Validators.required)

      });
      save(){
        this.service.savedetails(this.addform.value).subscribe(
          result=>{this.savresp=result;
          });
          alert("Added Successfully")
             this.route.navigate(['Home/DesignationDetails']);
 }
      }


