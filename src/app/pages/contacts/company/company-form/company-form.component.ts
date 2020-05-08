import { Component, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../models/company.model';
import { Country } from '../../models';
import { CountryService } from '../../country.service';
import { AlertService } from '../../../../shared/alert.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent {

  error = '';
  companyForm: FormGroup;
  submitted = false;
  hidden: boolean;
  id: number;
  countries: Country[]; // Observable<Country[]>;

  constructor(private fb: FormBuilder,
              private alertService: AlertService,
              private countryService: CountryService) {
    countryService.getAllCountries().subscribe((res) => {
      this.countries = res;
    }, (error) => {
      this.alertService.error('Error getting the countries: ' + error.statusText);
    }); // | async
  }

  get f() {
    return this.companyForm.controls;
  }

  @Input()
  public set company(company: Company) {
    this.buildForm(company);
  }

  buildForm(company: Company) {
    console.log('Building form', company);
    this.companyForm = this.fb.group({
      key: [company.key],
      name: [company ? company.name : '', [Validators.required]],
      country: [company ? company.country : '', [Validators.required]],
    });
  }
}
