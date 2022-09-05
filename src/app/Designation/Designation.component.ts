import { Component, OnInit } from '@angular/core';
import { DesignationService } from './Designation.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Designation',
  templateUrl: './Designation.component.html',
  styleUrls: ['./Designation.component.css']
})
export class DesignationComponent implements OnInit {

  constructor(public service: DesignationService, private tostr: ToastrService) { }

  ngOnInit() : void {
  
  }


}
