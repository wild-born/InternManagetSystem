import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApplyLeaveComponent } from './AddApplyLeave/AddApplyLeave.component';
import { AddDesignationDetailComponent } from './AddDesignationDetail/AddDesignationDetail.component';
import { ApplyLeaveComponent } from './ApplyLeave/ApplyLeave.component';
import { AuthGuard } from './auth.guard';
import { DashBoardComponent } from './DashBoard/DashBoard.component';
import { DesignationComponent } from './Designation/Designation.component';
import { DesignationDetailComponent } from './DesignationDetail/DesignationDetail.component';
import { EditDesignationComponent } from './EditDesignation/EditDesignation.component';
import { HomeComponent } from './Home/Home.component';
import { InternDetailComponent } from './InternDetail/InternDetail.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { ViewComponent } from './View/View.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent,children:[
    {path:'InternDetails',component:InternDetailComponent,children:[
      {path:'Home/InternDetails',component:RegisterComponent}
    ]},

  ]},
  {path:'Home',component:HomeComponent,children:[
    {path:'DesignationDetails',component:DesignationDetailComponent}
  ]},
  {path:'Home',component:HomeComponent,children:[
    {path:'Desdignation',component:DesignationComponent}
  ]},
  {path:'Home',component:HomeComponent,children:[
    {path:'EditDesignation/:ID',component:EditDesignationComponent},
  ]},

    // {path:'Home',component:HomeComponent,children:[
    //   {path:'EditDesignation/:designationId',component:EditDesignationComponent},
    // ]},


    {path:'Home',component:HomeComponent,children:[
    {path:'AddDesignatinDetails',component:AddDesignationDetailComponent},
      ]},

  {path:'Home',component:HomeComponent,children:[
    {path:'ApplyLeave',component:ApplyLeaveComponent},
    ]},

      {path:'Home',component:HomeComponent,children:[
        {path:'Dashboard',component:DashBoardComponent},
        ]},

    {path:'Home',component:HomeComponent,children:[
      {path:'AddApplyLeave',component:AddApplyLeaveComponent},
      ]},
      // {path:'',component:AddDesignationDetailComponent},
{path:'logout',component:LoginComponent},



{path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  // {path:'Auth',canActivate:[AuthGuard],loadChildren:()=>import('./auth.module').then((m)=>m.authmodule)},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
