import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './products/search/search.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProductsComponent,SearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
