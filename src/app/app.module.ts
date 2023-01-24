import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AllUsersComponent, UserDetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
