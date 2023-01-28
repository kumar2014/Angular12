import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BetterhighlightDirective } from './CustomDirective/betterhighlightdirective.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BetterhighlightDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
