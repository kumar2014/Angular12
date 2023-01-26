import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Comp1Component } from '../ViewEncapsulationNone/comp1.component';
import { Comp2Component } from '../ViewEncapsulationNone/comp2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Comp1Component, Comp2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
