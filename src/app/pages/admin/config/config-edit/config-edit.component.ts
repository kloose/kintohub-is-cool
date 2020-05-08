import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../../models/config.model';
import { ConfigService } from '../../config.service';
import { AlertService } from '../../../../shared/alert.service';

@Component({
  selector: 'app-config-edit',
  templateUrl: './config-edit.component.html'
})
export class ConfigEditComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  error = '';
  configForm: FormGroup;
  submitted = false;
  hidden: boolean;
  id: number;
  configs: Observable<Config[]>;

  constructor(private fb: FormBuilder,
              public configService: ConfigService,
              private router: Router,
              private alertService: AlertService,
              private config: NgSelectConfig,
              route: ActivatedRoute
              ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Configs'}, {label: 'Create Config', active: true}];
    this.configs = this.configService.getAllConfigs().pipe(map(result => result.results));
    if (this.id) {
      this.configService.findConfigById(this.id).subscribe((res) => {
        this.buildForm(res);
      });
    } else {
      this.buildForm(new Config());
    }
  }

  get f() {
    return this.configForm.controls;
  }

  buildForm(config: Config) {
    this.configForm = this.fb.group({
      id: [config.id],
      key: [config ? config.key : '', [Validators.required]],
      value: [config ? config.value : '', [Validators.required]],
      defaultValue: [config ? config.defaultValue : false, [Validators.required]],
      modelType: [config ? config.modelType : '', [Validators.required]],
      modelId: [config ? config.modelId : '', []],
    });
  }

  cancel() {
    this.router.navigate(['/admin/configs']);
  }

  save() {
    this.error = '';
    this.submitted = true;
    console.log('saving form...', this.configForm);

    if (this.configForm.invalid) {
      this.alertService.error('Please check required fields');
      this.error = 'Please check required fields';
      return;
    }
    if (this.id) {
      this.configService.updateConfig(this.configForm.value).subscribe(() => {
        console.log('Config form saved');
        this.router.navigate(['/admin/configs']);
      }, (error) => {
        this.error = error.statusText;
      });
    } else {
      this.configService.createConfig(this.configForm.value).subscribe(() => {
        console.log('Config form saved');
        this.router.navigate(['/admin/configs']);
      }, (error) => {
        this.error = error.statusText;
      });
    }

  }

}
