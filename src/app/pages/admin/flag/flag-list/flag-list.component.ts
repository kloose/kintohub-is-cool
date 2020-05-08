import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { Flag } from '../../models/flag.model';
import { FlagService } from '../../flag.service';

@Component({
	selector: 'app-flag-list',
	templateUrl: './flag-list.component.html',
})
export class FlagListComponent implements OnInit, AfterViewInit{
  breadCrumbItems: Array<{}>;

  data: Flag[];
  ColumnMode = ColumnMode;

  constructor(private flagService: FlagService,
              private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Companies' }, { label: 'Client Companies', active: true }];
  }

  ngAfterViewInit(): void {
    this.load();
  }

  load() {
    this.flagService.getAllFlags().subscribe((res) => {
      this.data = res.results;
      console.log('Data', res);
    });
  }

  edit(row) {
    console.log('row', row);
    this.router.navigate([`/admin/flag/${row.id}`]);
  }

}
