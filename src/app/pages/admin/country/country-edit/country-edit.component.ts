import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { Country } from '../../../contacts/models';
import { CountryService } from '../../../contacts/country.service';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html'
})
export class CountryEditComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  error = '';
  countryForm: FormGroup;
  submitted = false;
  hidden: boolean;
  id: number;
  countries: Observable<Country[]>;

  constructor(private fb: FormBuilder,
              private countryService: CountryService,
              private router: Router,
              private toastr: ToastrService,
              private config: NgSelectConfig,
              route: ActivatedRoute
              ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Countries'}, {label: 'Create Country', active: true}];
    this.countries = this.countryService.getAllCountries(); //.pipe(map(result => result.items));
    if (this.id) {
      this.countryService.findCountryById(this.id).subscribe((res) => {
        this.buildForm(res);
      });
    } else {
      this.buildForm(new Country());
    }
  }

  get f() {
    return this.countryForm.controls;
  }

  buildForm(country: Country) {
    this.countryForm = this.fb.group({
      id: [country.id],
      name: [country ? country.name : '', [Validators.required]],
      dialingCode: [country ? country.dialingCode : '', [Validators.required]],
      code: [country ? country.code : '', [Validators.required]],
    });
  }

  cancel() {

  }
  save() {
    this.error = '';
    this.submitted = true;
    console.log('saving form...', this.countryForm);

    if (this.countryForm.invalid) {
      this.toastr.error('Please check required fields');
      this.error = 'Please check required fields';
      return;
    }
    if (this.id) {
      this.countryService.updateCountry(this.countryForm.value).subscribe(() => {
        console.log('Country form saved');
        this.router.navigate(['/admin/countries']);
      }, (error) => {
        this.error = error.statusText;
      });
    } else {
      this.countryService.createCountry(this.countryForm.value).subscribe(() => {
        console.log('Country form saved');
        this.router.navigate(['/admin/countries']);
      }, (error) => {
        this.error = error.statusText;
      });
    }

  }

}
