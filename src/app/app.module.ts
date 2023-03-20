import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './reusable/tabs/tabs.component';
import { RolesComponent } from './roles/roles.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    AdminDashboardComponent,
    AdminLayoutComponent,
    EmployeeComponent,
    HomeLayoutComponent,
    RolesComponent,
    UserDashboardComponent,
    UserLayoutComponent,
    UserListComponent,
    TabsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
