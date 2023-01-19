import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // #8
  constructor(private http: HttpClient) {}
  // #9   onProductCreate(products: This products going to an ngform object
  onProductCreate(products: { pName: string; desc: string; price: string }) {
    console.log(products);
    const headers = new HttpHeaders({ myHrader: 'procademy' });
    this.http
      .post(
        'https://angularbykumar-default-rtdb.firebaseio.com/products.json',
        products,
        { headers }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
