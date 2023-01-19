import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { product } from './model/products';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  allProducts: product[] = [];
  isFetching: boolean = false;
  // #8
  constructor(private http: HttpClient) {}
  // #9   onProductCreate(products: This products going to an ngform object

  // #11 When the page loades we want to display all the products which we have in the database
  ngOnInit() {
    this.fetchProduct();
  }
  // #12
  onProductFetch() {
    this.fetchProduct();
  }
  onProductCreate(products) {
    // Please refer Previous code
  }
  // #10
  private fetchProduct() {
    // Please Refer Previous Code
  }
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
