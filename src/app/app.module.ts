import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AdduserComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
