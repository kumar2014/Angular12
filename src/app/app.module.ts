import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassDirective } from './CustomDirective/class.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ClassDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
