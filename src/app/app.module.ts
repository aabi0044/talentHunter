import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { CompanylistComponent } from './pages/companylist/companylist.component';
import { JoblistComponent } from './pages/joblist/joblist.component';
import { BusinesslistComponent } from './pages/businesslist/businesslist.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    MainpageComponent,
    SidebarComponent,
    EmployeeListComponent,
    CompanylistComponent,
    JoblistComponent,
    BusinesslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
