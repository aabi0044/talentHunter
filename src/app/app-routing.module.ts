import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { JoblistComponent } from './pages/joblist/joblist.component';
import { CompanylistComponent } from './pages/companylist/companylist.component';
import { BusinesslistComponent } from './pages/businesslist/businesslist.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[{
      path:'mainpage',
      component:MainpageComponent
    }]
  },{
    path:'joblist',
    component:JoblistComponent
  },{
    path:'companylist',
    component:CompanylistComponent
  },{
    path:'businesslist',
    component:BusinesslistComponent
  },{
    path:'employeeList',
    component:EmployeeListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
