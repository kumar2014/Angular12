import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoggerService } from './Services/logger.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AdduserComponent],
  bootstrap: [AppComponent],
  providers: [LoggerService], ///#5
})
export class AppModule {}
