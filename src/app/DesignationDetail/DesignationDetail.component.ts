import { Component, OnInit } from '@angular/core';
import { DesignationDetailService } from './DesignationDetail.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-DesignationDetail',
  templateUrl: './DesignationDetail.component.html',
  styleUrls: ['./DesignationDetail.component.css']
})
export class DesignationDetailComponent implements OnInit {
  user!: FormGroup;
  email:any;
  data:any;
  id:any;
  savresp:any;

  constructor(private fb: FormBuilder, private DesignationDetailService: DesignationDetailService,
    private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.alldetails();
  }


  alldetails(){
    this.DesignationDetailService.details().subscribe(response=>{
      console.log("DesignationDetails",response);
      this.data = response;
    });
  };
  edit(itme:any){
    var id:number = itme.id;
    console.log(itme);

    this.DesignationDetailService.editdata(id,itme).subscribe(response=>
    {
    console.log("DesignationDetails",response);
        itme = response;
        this.alldetails();
  });
      }

  delete(itme:any){
    this.DesignationDetailService.deleteData(itme.id).subscribe(response=>
      {
        console.log("DesignationDetails",response);
        alert("Delete Permanently?")
        this.data = response;
        this.alldetails();
      });
      }

}
