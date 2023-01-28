import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { IfDirective } from './CustomDirective/if.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, IfDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
