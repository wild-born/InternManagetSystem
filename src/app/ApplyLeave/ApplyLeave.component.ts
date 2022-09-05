import { Component, OnInit } from '@angular/core';
import { ApplyLeaveService } from './ApplyLeave.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ApplyLeave',
  templateUrl: './ApplyLeave.component.html',
  styleUrls: ['./ApplyLeave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  user!: FormGroup;
  email:any;
  data:any;

  constructor(private fb: FormBuilder, private ApplyLeaveService: ApplyLeaveService,
    private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getalldetails();
  }
  getalldetails(){
    this.ApplyLeaveService.Alldetails().subscribe(response=>{
      console.log("ApplyLeave",response);
      this.data = response;
    });

  };


}
