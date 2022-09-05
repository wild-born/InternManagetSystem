import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { InternDetailComponent } from './InternDetail/InternDetail.component';
import { RegisterComponent } from './Register/Register.component';
import { HomeComponent } from './Home/Home.component';
import { ViewComponent } from './View/View.component';
import { DesignationDetailComponent } from './DesignationDetail/DesignationDetail.component';
import { ApplyLeaveComponent } from './ApplyLeave/ApplyLeave.component';
import { AddDesignationDetailComponent } from './AddDesignationDetail/AddDesignationDetail.component';
import { AddApplyLeaveComponent } from './AddApplyLeave/AddApplyLeave.component';
import { DashBoardComponent } from './DashBoard/DashBoard.component';
import { EditDesignationComponent } from './EditDesignation/EditDesignation.component';
import { DesignationComponent } from './Designation/Designation.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      InternDetailComponent,
      RegisterComponent,
      HomeComponent,
      ViewComponent,
      DesignationDetailComponent,
      ApplyLeaveComponent,
      AddDesignationDetailComponent,
      AddApplyLeaveComponent,
      DashBoardComponent,
      EditDesignationComponent,
      DesignationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,ToastrModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
