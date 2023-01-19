import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { product } from '../model/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  allProducts: product[] = [];
  constructor(private http: HttpClient) {}
  createProduct(products: { pName: string; desc: string; price: string }) {
    console.log(products);
    const headers = new HttpHeaders({ myHrader: 'procademy' });
    this.http
      .post<{ name: string }>(
        'https://angularbykumar-default-rtdb.firebaseio.com/products.json',
        products,
        { headers }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  fetchProduct() {
    return (
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
    );
  }
  deleteProduct(id: string) {
    this.http
      .delete(
        'https://angularbykumar-default-rtdb.firebaseio.com/products/' +
          id +
          '.json'
      )
      .subscribe();
  }
  deleteAllProduct() {
    this.http
      .delete(
        'https://angularbykumar-default-rtdb.firebaseio.com/products.json/'
      )
      .subscribe();
  }
  updateProduct(id: string, value: product) {
    this.http
      .put(
        'https://angularbykumar-default-rtdb.firebaseio.com/products/' +
          id +
          '.json',
        value
      )
      .subscribe();
  }
}

// Note:
// In the bigger application lot of http request and it make the component grow with lots and lots of code.
// The component we should only write those codes is related to user interface
// The code for dealing with the data should we move to service class
