import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SetbackgrounddirectiveDirective } from './CustomDirective/setbackgrounddirective.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SetbackgrounddirectiveDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
