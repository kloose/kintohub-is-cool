import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { Person } from '../../models/person.model';
import { defaultSearchRequest } from '../../../../shared/crud';
import { PersonService } from '../../person.service';

@Component({
	selector: 'app-person-list',
	templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit, AfterViewInit{
  breadCrumbItems: Array<{}>;

  data: Person[];
  ColumnMode = ColumnMode;

  constructor(private personService: PersonService,
              private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'people' }, { label: 'Client people', active: true }];
  }

  ngAfterViewInit(): void {
    this.load();
  }

  load() {

    this.personService.findPeople(defaultSearchRequest()).subscribe((res) => {
      this.data = res.results;
      console.log('Data', res);
    });
  }

  edit(row) {
    console.log('row', row);
    this.router.navigate([`/contacts/person/${row.id}`]);
  }

}
