import { Component, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {

  selectedProduct: Product;
  error = '';
  productForm: FormGroup;
  submitted = false;
  hidden: boolean;
  constructor(private fb: FormBuilder) {
  }

  get f() {
    return this.productForm.controls;
  }

  @Input()
  public set product(product: Product) {
    this.selectedProduct = product;
    console.log('Set form to ', this.selectedProduct);
    this.build(this.selectedProduct);
  }

  build(product: Product) {
    console.log("building productForm", product);
    if (product) {
      this.productForm = this.fb.group({
        id: [product.id],
        name: [product ? product.name : '', [Validators.required]],
        category: [product ? product.category : '', [Validators.required]],
        subCategory: [product ? product.subCategory : '', [Validators.required]],
      });
    } else {
      console.error('Product object is null');
    }
  }
}
