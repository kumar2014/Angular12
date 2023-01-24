import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { EnrollService } from './Services/enroll.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, JavascriptComponent, AngularComponent],
  bootstrap: [AppComponent],
  providers: [EnrollService], //#2
})
export class AppModule {}
