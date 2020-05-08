import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { AlertService } from '../../../../shared/alert.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  error = '';
  @ViewChild("productForm") productFormComponent: ProductFormComponent;
  product: Product;

  // editForm: FormGroup;
  productForm: FormGroup;
  submitted = false;
  hidden: boolean;
  id: number;
  people: Observable<Product[]>;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private router: Router,
              private alertService: AlertService,
              private config: NgSelectConfig,
              private route: ActivatedRoute
  ) {
    this.id = route.snapshot.params['id'];
    console.log('This is the ID=' + this.id);
    if (this.id) {
      this.breadCrumbItems = [{label: 'Product'}, {label: 'Create product', active: true}];
    } else {
      this.breadCrumbItems = [{label: 'Product'}, {label: 'Edit product', active: true}];
    }
  }

  ngOnInit() {

    if (this.id) {
      this.productService.findProductById(this.id).subscribe((res) => {
        this.product = res;
        this.buildForm(this.product);
      });
    } else {
      this.product = new Product();
    }
  }

  ngAfterViewInit() {
    this.buildForm(this.product);
  }

  get f() {
    return this.productForm.controls;
  }

  buildForm(product: Product) {
    this.product = product;

    // this.editForm = this.fb.group({});
    // if (this.product) {
    //   this.editForm.addControl('productForm', this.productFormComponent.productForm);
    //   this.productFormComponent.productForm.setParent(this.editForm);
    // }

    if (this.product) {
      this.productForm = this.fb.group({
        id: [product.id],
        name: [product ? product.name : '', [Validators.required]],
        category: [product ? product.category : '', [Validators.required]],
        subCategory: [product ? product.subCategory : '', [Validators.required]],
      });
    }

  }

  cancel() {
    this.router.navigate(['/admin/products']);
  }

  save() {
    this.error = '';
    this.submitted = true;
    console.log('saving form...', this.productForm);

    if (this.productForm.invalid) {
      this.alertService.error('Please check required fields');
      this.error = 'Please check required fields';
      return;
    }
    if (this.id) {
      this.productService.updateProduct(this.productForm.value).subscribe(() => {
        console.log('product form saved');
        this.router.navigate(['/admin/products']);
      }, (error) => {
        this.error = error.statusText;
      });
    } else {
      this.productService.createProduct(this.productForm.value).subscribe(() => {
        console.log('product form saved');
        this.router.navigate(['/admin/products']);
      }, (error) => {
        this.error = error.statusText;
      });
    }

  }

}
