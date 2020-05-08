import { Component, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../models/person.model';
import { ModelType } from '../../../../shared/modelType.model';
import { OptionService } from '../../../admin/option.service';
import { Option } from '../../../admin/models/option.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html'
})
export class PersonFormComponent {

  selectedPerson: Person;
  error = '';
  personForm: FormGroup;
  submitted = false;
  hidden: boolean;
  @Input()
  options: Option[];

  roles: Option[];

  constructor(private fb: FormBuilder,
              private optionService: OptionService) {
    this.optionService
        .getOptions(ModelType.CLIENT, ModelType.PERSON, 'role')
        .subscribe((res) => {
      this.roles = res;
    });
  }

  get f() {
    return this.personForm.controls;
  }

  @Input()
  public set person(person: Person) {
    this.selectedPerson = person;
    console.log('Set form to ', this.selectedPerson);
    this.build(this.selectedPerson);
  }

  build(person: Person) {
    console.log("building personForm", person);
    if (person) {
      this.personForm = this.fb.group({
        key: [person.key],
        firstName: [person ? person.firstName : '', [Validators.required]],
        lastName: [person ? person.lastName : '', [Validators.required]],
        emailAddress: [person ? person.emailAddress : '', [Validators.required]],
        roles: [person ? person.roles : '', [Validators.required]],
      });
    } else {
      console.error('Person object is null');
    }
  }
}
