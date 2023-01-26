import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated/view-encapsulation-emulated.component';
import { Comp1Component } from './view-encapsulation-emulated/comp1/comp1.component';
import { Comp2Component } from './view-encapsulation-emulated/comp2/comp2.component';
import { ViewEncapsulationNoneComponent } from './view-encapsulation-none/view-encapsulation-none.component';
import { Comp3Component } from './view-encapsulation-none/comp3/comp3.component';
import { Comp4Component } from './view-encapsulation-none/comp4/comp4.component';
import { ViewEncapsulationShadowDomComponent } from './view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.component';
import { Comp5Component } from './view-encapsulation-shadow-dom/comp5/comp5.component';
import { Comp6Component } from './view-encapsulation-shadow-dom/comp6/comp6.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ViewEncapsulationEmulatedComponent,
    Comp1Component,
    Comp2Component,
    ViewEncapsulationNoneComponent,
    Comp3Component,
    Comp4Component,
    ViewEncapsulationShadowDomComponent,
    Comp5Component,
    Comp6Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
