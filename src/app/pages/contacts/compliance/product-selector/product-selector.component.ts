import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../admin/product/product.model';

@Component({
	selector: 'app-product-selector',
	templateUrl: './product-selector.component.html',
})
export class ProductSelectorComponent implements OnInit {

	@Input()
	products: Product[];
	@Input()
	product: Product;
	@Output()
	productSelected: EventEmitter<Product> = new EventEmitter<Product>();

	constructor() {
	}

	ngOnInit() {
	}

	onSelected(product: Product) {
		this.productSelected.emit(product);
	}
}
