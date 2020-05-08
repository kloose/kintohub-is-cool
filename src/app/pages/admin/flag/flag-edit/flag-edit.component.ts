import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flag } from '../../models/flag.model';
import { FlagService } from '../../flag.service';

@Component({
  selector: 'app-flag-edit',
  templateUrl: './flag-edit.component.html'
})
export class FlagEditComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  error = '';
  flagForm: FormGroup;
  submitted = false;
  hidden: boolean;
  id: number;
  flags: Observable<Flag[]>;

  constructor(private fb: FormBuilder,
              private flagService: FlagService,
              private router: Router,
              private toastr: ToastrService,
              route: ActivatedRoute
              ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Flags'}, {label: 'Create Flag', active: true}];
    this.flags = this.flagService.getAllFlags().pipe(map(result => result.results));
    if (this.id) {
      this.flagService.findFlagById(this.id).subscribe((res) => {
        this.buildForm(res);
      });
    } else {
      this.buildForm(new Flag());
    }
  }

  get f() {
    return this.flagForm.controls;
  }

  buildForm(flag: Flag) {
    this.flagForm = this.fb.group({
      id: [flag.id],
      key: [flag ? flag.key : '', [Validators.required]],
      category: [flag ? flag.category : '', [Validators.required]],
      enabled: [flag ? flag.enabled : false, [Validators.required]],
    });
  }

  cancel() {
    this.router.navigate(['/admin/flags']);
  }

  save() {
    this.error = '';
    this.submitted = true;
    console.log('saving form...', this.flagForm);

    if (this.flagForm.invalid) {
      this.toastr.error('Please check required fields');
      this.error = 'Please check required fields';
      return;
    }
    if (this.id) {
      this.flagService.updateFlag(this.flagForm.value).subscribe(() => {
        console.log('Flag form saved');
        this.router.navigate(['/admin/flags']);
      }, (error) => {
        this.error = error.statusText;
      });
    } else {
      this.flagService.createFlag(this.flagForm.value).subscribe(() => {
        console.log('Flag form saved');
        this.router.navigate(['/admin/flags']);
      }, (error) => {
        this.error = error.statusText;
      });
    }

  }

}
