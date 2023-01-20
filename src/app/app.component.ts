import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { product } from './model/products';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  allProducts: product[] = [];
  isFetching: boolean = false;
  editMode: boolean = false;
  curentProductId: string;
  errorMessage: string = null;

  // #6
  errorSub: Subscription;
  @ViewChild('productsForm') form: NgForm;

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.fetchProduct();
    // #4 lets subscribe the observable which we Subject will return
    // this.productService.error.subscribe((message) => {
    // #7
    this.errorSub = this.productService.error.subscribe((message) => {
      // Here lets assign erroSub with the subscribtion retuned by subscribe method
      // this.productService.errorSubject and its going to return observable so ltes go head and subscribe that observable
      this.errorMessage = message;
    });
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
      },
      (err) => {
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
  // #5
  ngOnDestroy(): void {
    // #8
    this.errorSub.unsubscribe(); // Its always recomented to unsubscribe from the observable explicitly when the component will be destroyed
  }
}

// Note: It always a good practice to unsubscribe from an observable explicitly
