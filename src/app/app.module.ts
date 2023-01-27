import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HoverDirective } from './CustomDirective/hover.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HoverDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
