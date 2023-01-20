import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { product } from '../model/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // #1
  error = new Subject<string>(); //It going to emit error message ad the error message its going to be a string value
  allProducts: product[] = [];
  constructor(private http: HttpClient) {}

  // Method  1:Setting Http Headers
  // Here we are creating this header we simply passed an object to this header constructor this HttpHeaders constructors
  createProduct(products: { pName: string; desc: string; price: string }) {
    console.log(products);

    // #1.1 We are creating a header using new HttpHeader class and the constructor of the HttpHeaders we are passing anonymous object
    // and here we setting the header by using a key value pair and, We are passing the this header with this post request by specifying  a third parameter for this post method
    const headers = new HttpHeaders({ myHrader: 'procademy' });
    this.http
      .post<{ name: string }>(
        'https://angularbykumar-default-rtdb.firebaseio.com/products.json',
        products,
        { headers } //#2      We are speicifying the headers which we want to send with this request
      )
      .subscribe(
        (res) => {
          console.log(res);
          // #2 Creating a second callback function
        },
        (err) => {
          // #3 lets access the Subject which we are storing the error property
          this.error.next(err.message); // This subject its going to return error observable
        }
      );
  }

  // Method 2: Setting Http Headers
  // Here we are creating a instance of this HttpHeaders and then on that instance we are calling set method,
  // Note: this HttpHeaders is immutable
  // This set method returns a new instance after modifying the given header and if the headeralready exits the when we use set method the header value is replaced with the given value in the returned object

  fetchProduct() {
    // #2.1 Create a varible header use HttpHeader
    const header = new HttpHeaders()
      // #2.2 In this http headers we can call a method called set and inside this method we can specify the header which we want to send as a key value pair
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    // #2.3 the header will be always passed as the last argument for the method so this get method taking only one argument which this url, so here we can specify an anonymous object  'https://angularbykumar-default-rtdb.firebaseio.com/products.json',{ headers: header }
    return this.http
      .get<{ [key: string]: product }>(
        'https://angularbykumar-default-rtdb.firebaseio.com/products.json',
        { headers: header }
      )

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
      );
  }
  // Method:3 Setting Http Headers
  // Note: When we use append method appends a new value to the existing set of values for headers and it returns a new instance
  // the append method does not check If the value exists are not

  deleteProduct(id: string) {
    // #3.1
    let header = new HttpHeaders();
    // #3.2
    header = header.append('my header1', 'Value1');
    header = header.append('my-header', 'Value2');
    this.http
      .delete(
        'https://angularbykumar-default-rtdb.firebaseio.com/products/' +
          id +
          '.json',
        { headers: header } //#3.3
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
