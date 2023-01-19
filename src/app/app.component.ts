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
  onProductCreate(product) {
    // Please Refer previous code
  }
  // #10
  private fetchProduct() {
    this.http
      .get<{ [key: string]: product }>(
        'https://angularbykumar-default-rtdb.firebaseio.com/products.json'
      )
      // #13 To diplay jon object in web browser
      // This Pipe methos allows us to transform the data before it reaches this subscribe method
      .pipe(
        map((res) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        })
      )
      // #12
      .subscribe((products) => {
        console.log(products);
        this.allProducts = products;
      });
  }
}
