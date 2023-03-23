import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesService } from './Services/courses.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    CoursesComponent,
    CourseComponent,
  ],

  imports: [BrowserModule, AppRoutingModule],
  // #3 Register CourseGuardService in providers array
  // #8 Register AuthService in providers array
  providers: [CoursesService, CourseGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
