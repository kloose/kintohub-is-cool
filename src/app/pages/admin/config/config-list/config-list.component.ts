import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { Config } from '../../models/config.model';
import { ConfigService } from '../../config.service';

@Component({
	selector: 'app-config-list',
	templateUrl: './config-list.component.html',
})
export class ConfigListComponent implements OnInit, AfterViewInit{
  breadCrumbItems: Array<{}>;

  data: Config[];
  ColumnMode = ColumnMode;

  constructor(private configService: ConfigService,
              private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Companies' }, { label: 'Client Companies', active: true }];
  }

  ngAfterViewInit(): void {
    this.load();
  }

  load() {
    this.configService.getAllConfigs().subscribe((res) => {
      this.data = res.results;
      console.log('Data', res);
    });
  }

  edit(row) {
    console.log('row', row);
    this.router.navigate([`/admin/config/${row.id}`]);
  }

}
