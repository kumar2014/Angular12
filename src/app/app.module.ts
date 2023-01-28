import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StyleDirective } from './CustomDirective/style.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StyleDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
