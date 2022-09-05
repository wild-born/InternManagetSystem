import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AddApplyLeaveService } from './AddApplyLeave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddApplyLeave',
  templateUrl: './AddApplyLeave.component.html',
  styleUrls: ['./AddApplyLeave.component.css']
})
export class AddApplyLeaveComponent implements OnInit {
  user!: FormGroup;
  data:any;
  save:any;

  constructor(private service:AddApplyLeaveService, private route: Router) { }

  ngOnInit() {
  }
  addform = new FormGroup({

    type : new FormControl("",Validators.required),
    internId : new FormControl("",Validators.required),
    when : new FormControl("",Validators.required),
    reason : new FormControl("",Validators.required),

      });
      add(){
        this.service.savealldetails(this.addform.value).subscribe(
          result=>{this.save=result;
          });
          alert("Added Successfully")
          this.route.navigate(['Home/ApplyLeave']);

}
}
