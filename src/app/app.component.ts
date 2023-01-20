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
  editMode: boolean = false;
  curentProductId: string;
  // #2
  errorMessage: string = null;
  @ViewChild('productsForm') form: NgForm;

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.fetchProduct();
  }

  onProductFetch() {
    this.fetchProduct();
  }
  onProductCreate(products: { pName: string; desc: string; price: string }) {
    if (!this.editMode) {
      this.productService.createProduct(products);
    } else {
      this.productService.updateProduct(this.curentProductId, products);
    }
  }

  private fetchProduct() {
    this.isFetching = true;
    this.productService.fetchProduct().subscribe(
      (products) => {
        this.allProducts = products;
        this.isFetching = false;
        // #1 Creating a second callback function for error handling
      },
      (err) => {
        // #3
        this.errorMessage = err.message;
      }
    );
  }
  onDeleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }
  onDeleteAllProduct() {
    this.productService.deleteAllProduct();
  }
  onEditClicked(id: string) {
    this.curentProductId = id;

    let currentProduct = this.allProducts.find((p) => {
      return p.id === id;
    });
    console.log(currentProduct);

    this.form.setValue({
      pName: currentProduct.pName,
      desc: currentProduct.desc,
      price: currentProduct.price,
    });

    this.editMode = true;
  }
}

// Note:
// #1 This callback function going to receive the error object which has occured.
// #3 The error obj is going to have a message property and we assigning that message to this error message property of this app componant class.
