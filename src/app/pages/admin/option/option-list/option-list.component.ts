import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { Option } from '../../models/option.model';
import { OptionService } from '../../option.service';

@Component({
	selector: 'app-option-list',
	templateUrl: './option-list.component.html',
})
export class OptionListComponent implements OnInit, AfterViewInit{
  breadCrumbItems: Array<{}>;

  data: Option[];
  ColumnMode = ColumnMode;

  constructor(private optionService: OptionService,
              private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Companies' }, { label: 'Client Companies', active: true }];
  }

  ngAfterViewInit(): void {
    this.load();
  }

  load() {
    this.optionService.getAllOptions().subscribe((res) => {
      this.data = res.results;
      console.log('Data', res);
    });
  }

  edit(row) {
    console.log('row', row);
    this.router.navigate([`/admin/option/${row.id}`]);
  }

}
