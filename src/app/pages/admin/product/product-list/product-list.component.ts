import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { defaultSearchRequest } from '../../../../shared/crud';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, AfterViewInit{
  breadCrumbItems: Array<{}>;

  data: Product[];
  ColumnMode = ColumnMode;
  columns = [];
  hoverIndex: number;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Products' }, { label: 'Client Products', active: true }];
  }

  ngAfterViewInit(): void {
    this.load();
  }

  load() {
    this.productService.findProducts(defaultSearchRequest()).subscribe((res) => {
      this.data = res.results;
      console.log('Data', res);
    });
  }

  edit(row) {
    console.log('row', row);
    this.router.navigate([`/admin/product/${row.id}`]);
  }

}
