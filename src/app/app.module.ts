import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
