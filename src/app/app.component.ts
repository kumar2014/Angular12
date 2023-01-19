import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { map } from 'rxjs';
import { product } from './model/products';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularHttpRequest';
  allProducts: product[] = [];

  constructor(private http: HttpClient) {}
  // #9   onProductCreate(products: This products going to an ngform object

  // #11 When the page loades we want to display all the products which we have in the database
  ngOnInit() {
    this.fetchProduct();
  }

  // #12
  onProductFetch() {
    // Ref Previous lession
  }
  onProductCreate(products: { pName: string; desc: string; price: string }) {
    console.log(products);
    // Please refer Privious Chapeter this section code there
  }

  private fetchProduct() {}
  onDeleteProduct(id: string) {
    this.http
      .delete(
        'https://angularbykumar-default-rtdb.firebaseio.com/products/' +
          id +
          '.json'
      )
      .subscribe();
  }
  onDeleteAllProduct() {
    this.http
      .delete(
        'https://angularbykumar-default-rtdb.firebaseio.com/products.json/'
      )
      .subscribe();
  }
}
