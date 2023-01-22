import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DemoComponent, CustomerListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
