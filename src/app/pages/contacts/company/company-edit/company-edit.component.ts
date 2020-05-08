import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgSelectConfig } from '@ng-select/ng-select';
import { CountryService } from '../../country.service';
import { CompanyFormComponent } from '../company-form/company-form.component';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html'
})
export class CompanyEditComponent implements OnInit {

  @ViewChild("companyForm") companyFormComponent: CompanyFormComponent;
  breadCrumbItems: Array<{}>;
  error = '';
  editForm: FormGroup;
  submitted = false;
  hidden: boolean;
  id: number;
  company: Company;

  constructor(private fb: FormBuilder,
              private companyService: CompanyService,
              private countryService: CountryService,
              private router: Router,
              private toastr: ToastrService,
              private config: NgSelectConfig,
              route: ActivatedRoute
              ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Companies'}, {label: 'Create Company', active: true}];
    if (this.id) {
      this.companyService.findCompanyById(this.id).subscribe((res) => {
        this.company = res;
        this.buildForm();
      });
    } else {
      this.company = new Company();
      this.buildForm();
    }
  }

  buildForm() {
    this.editForm = this.fb.group({});
    if (this.company) {
      this.editForm.addControl('companyForm', this.companyFormComponent.companyForm);
      this.companyFormComponent.companyForm.setParent(this.editForm);
    }
  }

  cancel() {
    this.router.navigate(['/contacts/companies']);
  }

  save() {
    this.error = '';
    this.submitted = true;
    console.log('saving form...', this.editForm);

    if (this.editForm.invalid) {
      this.toastr.error('Please check required fields');
      this.error = 'Please check required fields';
      return;
    }
    if (this.id) {
      this.companyService.updateCompany(this.editForm.value).subscribe(() => {
        console.log('Company form saved');
        this.router.navigate(['/contacts/companies']);
      }, (error) => {
        this.error = error.statusText;
      });
    } else {
      this.companyService.createCompany(this.editForm.value).subscribe(() => {
        console.log('Company form saved');
        this.router.navigate(['/contacts/companies']);
      }, (error) => {
        this.error = error.statusText;
      });
    }

  }

}
