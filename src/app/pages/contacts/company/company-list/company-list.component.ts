import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../company.service';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { defaultSearchRequest } from '../../../../shared/crud';

@Component({
	selector: 'app-company-list',
	templateUrl: './company-list.component.html',
})
export class CompanyListComponent implements OnInit, AfterViewInit{
  breadCrumbItems: Array<{}>;

  data: Company[];
  ColumnMode = ColumnMode;
  columns = [];
  hoverIndex: number;

  constructor(private companyService: CompanyService,
              private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Companies' }, { label: 'Client Companies', active: true }];

    this.columns = [{ prop: 'id' }, { name: 'Name' }, { name: 'Country' }, [{ name: 'actions'}]];
  }

  ngAfterViewInit(): void {
    this.load();
  }

  load() {

    this.companyService.findCompanies(defaultSearchRequest()).subscribe((res) => {
      this.data = res.results;
      console.log('Data', res);
    });
  }

  edit(row) {
    console.log('row', row);
    this.router.navigate([`/contacts/company/${row.id}`]);
  }

}
