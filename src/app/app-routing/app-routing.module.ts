import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CoursesComponent } from '../courses/courses.component';
import { CourseComponent } from '../courses/course/course.component';
import { RouterModule, Routes } from '@angular/router';
// #1
const appRoutes: Routes = [
  // {path: '', component: HomeComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Course/:id', component: CourseComponent },
];
// #2: add RouterModule.forRoot(appRoutes)
// #3: add exports:[RouterModule]  
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]  
})


export class AppRoutingModule { 

 
}