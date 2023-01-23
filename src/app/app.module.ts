import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, JavascriptComponent, AngularComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
