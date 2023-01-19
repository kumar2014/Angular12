import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('productsForm') form: NgForm;
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
  onEditClicked(id: string) {
    //Get the product based on the Id
    //Now we use find method to find an element in an array based on the given condition, this find method will return the first element from that array which satisfies the condition
    let currentProduct = this.allProducts.find((p) => {
      return p.id === id;
    });
    console.log(currentProduct);
    //populate the form with the product details
    this.form.setValue({
      pName: currentProduct.pName,
      desc: currentProduct.desc,
      price: currentProduct.price,
    });
    //Change the button value to update product
  }
}
