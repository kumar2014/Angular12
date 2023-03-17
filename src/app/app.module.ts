import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    BrowserModule, // Step:#3
    FormsModule,
  ],
  declarations: [AppComponent, LoginComponent, ListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
