import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonService } from '../../person.service';
import { Person } from '../../models/person.model';
import { PersonFormComponent } from '../person-form/person-form.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  error = '';
  @ViewChild("personForm") personFormComponent: PersonFormComponent;
  person: Person;

  editForm: FormGroup;
  submitted = false;
  hidden: boolean;
  id: number;
  people: Observable<Person[]>;

  constructor(private fb: FormBuilder,
              private personService: PersonService,
              private router: Router,
              private alertService: ToastrService,
              private config: NgSelectConfig,
              route: ActivatedRoute
              ) {
    this.id = route.snapshot.params['id'];
    if (this.id) {
      this.breadCrumbItems = [{label: 'people'}, {label: 'Create person', active: true}];
    } else {
      this.breadCrumbItems = [{label: 'people'}, {label: 'Edit person', active: true}];
    }
  }

  ngOnInit() {
    
    this.people = this.personService.getAllPeople().pipe(map(result => result.results));
    if (this.id) {
      this.personService.findPersonById(this.id).subscribe((res) => {
        this.person = res;
      });
    } else {
      this.person = new Person();
    }
  }

  ngAfterViewInit() {
    this.buildForm(this.person);
  }

  get f() {
    return this.editForm.controls;
  }

  buildForm(person: Person) {
    this.person = person;

    this.editForm = this.fb.group({});
    if (this.person) {
      this.editForm.addControl('personForm', this.personFormComponent.personForm);
      this.personFormComponent.personForm.setParent(this.editForm);
    }
  }

  cancel() {
    this.router.navigate(['/contacts/people']);
  }

  save() {
    this.error = '';
    this.submitted = true;
    console.log('saving form...', this.editForm);

    if (this.editForm.invalid) {
      this.alertService.error('Please check required fields');
      this.error = 'Please check required fields';
      return;
    }
    if (this.id) {
      this.personService.updatePerson(this.editForm.value).subscribe(() => {
        console.log('person form saved');
        this.router.navigate(['/contacts/people']);
      }, (error) => {
        this.error = error.statusText;
      });
    } else {
      this.personService.createPerson(this.editForm.value).subscribe(() => {
        console.log('person form saved');
        this.router.navigate(['/contacts/people']);
      }, (error) => {
        this.error = error.statusText;
      });
    }

  }

}
