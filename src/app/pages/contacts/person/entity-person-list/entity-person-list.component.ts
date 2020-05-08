import { AfterViewInit, Component, Input, OnInit, } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { Person } from '../../models/person.model';
import { PersonService } from '../../person.service';
import { ModelType } from '../../../../shared/modelType.model';
import { defaultSearchRequest } from '../../../../shared/crud';

@Component({
	selector: 'app-entity-person-list',
	templateUrl: './entity-person-list.component.html',
})
export class EntityPersonListComponent implements OnInit, AfterViewInit{

  @Input()
  modelType: ModelType;
  @Input()
  modelId: string;

  data: Person[];
  ColumnMode = ColumnMode;

  constructor(private personService: PersonService,
              private router: Router) {
  }

  ngOnInit() {
    this.personService.findPeopleByModel(this.modelType, this.modelId).subscribe((res) => {
      this.data = res;
    });
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
