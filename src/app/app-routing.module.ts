import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { RolesComponent } from './roles/roles.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin-dash',
        component: AdminDashboardComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'roles',
        component: RolesComponent,
      },
    ],
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'addUser',
        component: AddUserComponent,
      },
      {
        path: 'user-dashboard',
        component: UserDashboardComponent,
      },
      {
        path: 'user-list',
        component: UserListComponent,
      },
    ],
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'way2addUser',
        component: AddUserComponent,
      },
      {
        path: 'way2user-dashboard',
        component: UserDashboardComponent,
      },
      {
        path: 'way2user-list',
        component: UserListComponent,
      },
      {
        path: 'way2admin-dash',
        component: AdminDashboardComponent,
      },
      {
        path: 'way2employee',
        component: EmployeeComponent,
      },
      {
        path: 'way2roles',
        component: RolesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
