import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditDesignationService } from './EditDesignation.service';

@Component({
  selector: 'app-EditDesignation',
  templateUrl: './EditDesignation.component.html',
  styleUrls: ['./EditDesignation.component.css']
})
export class EditDesignationComponent implements OnInit {
  user!: FormGroup;

  email:any;
  data:any;
  id:any;
  savresp:any;
  param:any;
  alart:boolean=false;


  constructor(private item:EditDesignationService, private fb: FormBuilder, private EditDesignationService: EditDesignationService,
    private route: Router, private activateRoute: ActivatedRoute,private service:EditDesignationService) { }

  ngOnInit(){
    this.id = this.activateRoute.snapshot.paramMap.get("ID")
    console.log(this.id);
    this.getData()
    this.user=this.fb.group({
      id:new FormControl("",Validators.required),
      designationId:new FormControl("",Validators.required),
      designationName : new FormControl("",Validators.required),
      departmentName : new FormControl("",Validators.required),
      companyMonthlyHour : new FormControl("",Validators.required),
      internMonthlyHour : new FormControl("",Validators.required),
      status : new FormControl("",Validators.required)
  })
  }
  getData(){
    this.EditDesignationService.getDataById(this.id).subscribe(response=>
        {
           console.log("Edit",response);
           this.data = response;
           this.user.controls['id']?.patchValue(this.id)
           this.user.controls['designationId']?.patchValue(this.data.designationId)
           this.user.controls['designationName']?.patchValue(this.data.designationName)
           this.user.controls['departmentName']?.patchValue(this.data.departmentName)
           this.user.controls['companyMonthlyHour']?.patchValue(this.data.companyMonthlyHour)
           this.user.controls['internMonthlyHour']?.patchValue(this.data.internMonthlyHour)
           this.user.controls['status']?.patchValue(this.data.status)
         });
  }
 

get(){
  this.EditDesignationService.UpdateData(this.id,this.user.value).subscribe(response=>
    {
       console.log("Edit",response);
       this.route.navigate(['./Home/DesignationDetails']);
     });
}



  //  put(){
  //    console.log("update");
  //  }
// this.
// updateform = new FormGroup({
//   designationId:new FormControl(result['designationId']),
//   designationName : new FormControl(result['designationName']),
//   departmentName : new FormControl(result['departmentName']),
//   companyMonthlyHour : new FormControl(result['companyMonthlyHour']),
//   internMonthlyHour : new FormControl(result['internMonthlyHour']),
//   status : new FormControl(result['status'])
// });

//     }

      // modify(){
      //   this.EditDesignationService.modifyall(this.updateform.value.designationId, this.updateform.value).subscribe(

      //     result=>{this.savresp=result;

      //     });
      //     this.route.navigate(['Home/DesignationDetails']);

  }


