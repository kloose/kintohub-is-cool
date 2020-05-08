import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { Country } from '../../../contacts/models';
import { CountryService } from '../../../contacts/country.service';

@Component({
	selector: 'app-country-list',
	templateUrl: './country-list.component.html',
})
export class CountryListComponent implements OnInit, AfterViewInit{
  breadCrumbItems: Array<{}>;

  data: Country[];
  ColumnMode = ColumnMode;

  constructor(private countryService: CountryService,
              private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Companies' }, { label: 'Client Companies', active: true }];
  }

  ngAfterViewInit(): void {
    this.load();
  }

  load() {
    this.countryService.getAllCountries().subscribe((res) => {
      this.data = res;
    });
  }

  edit(row) {
    console.log('row', row);
    this.router.navigate([`/contacts/country/${row.id}`]);
  }

}
