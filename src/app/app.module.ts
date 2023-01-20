import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
 

// Note: When we are creating the product so far that we are using this create product method of this product service so we are creating this product we are not subscribing to in our component class insteed 
// we have subcsribe to it in our service class itself so after sending the post request only we have subscribed to it 
// So there is also another way of handling error that can be useful in the cases when you send the requst and you don't subscribe to it in the component class
//  now its easy for us to react to the errors in the component class when we are returing the observable from the service and subscribing it in the component class.
 
// But we are creating a product here we have subscribed to response to the service itself now of course you can also return the observable from here and then you can subscribe it in the component class and that wold not be wrong but we can also implement it in a differnt way by using subjects.

// This approach can be helpful when we want to use the error in the multiple places of our angular application