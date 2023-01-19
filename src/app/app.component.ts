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
  onProductCreate(products: { pName: string; desc: string; price: string }) {
    console.log(products);
    // Please refer Privious Chapeter this section code there
  }
  // #10
  private fetchProduct() {
    this.isFetching = true;
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
        this.isFetching = false;
      });
  }
}

// get<{ [key: string]: product }> we are Specifying the type of the response which this get method is going to return
// So here the response is going to the type onject and this object is having a key type string and that key its going to hava a value and this value is goig to ba a type product it has in product.ts
