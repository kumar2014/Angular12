import { Component, OnInit } from '@angular/core';
import { product } from './model/products';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  allProducts: product[] = [];
  isFetching: boolean = false;
  // #8
  constructor(private productService: ProductService) {}
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
    this.productService.createProduct(products);
  }
  // #10
  private fetchProduct() {
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.isFetching = false;
    });
  }
  onDeleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }
  onDeleteAllProduct() {
    this.productService.deleteAllProduct();
  }
}
