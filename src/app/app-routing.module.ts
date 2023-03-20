import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

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
