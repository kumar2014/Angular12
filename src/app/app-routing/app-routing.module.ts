import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { CoursesComponent } from '../courses/courses.component';
import { CourseComponent } from '../courses/course/course.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseGuardService } from '../course-guard.service';
const appRoutes: Routes = [
  // {path: '', component: HomeComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },

  // #4 we have to use canActivate:[CourseGuardService]  CourseGuardService is a class name
  {
    path: 'Courses',
    component: CoursesComponent,
    canActivate: [CourseGuardService],
  },
  { path: 'Course/:id', component: CourseComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
