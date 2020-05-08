import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OptionService } from '../../option.service';
import { Option } from '../../models/option.model';
import { ConfigService } from '../../config.service';
import { ModelType } from '../../../../shared/modelType.model';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'app-option-edit',
    templateUrl: './option-edit.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionEditComponent implements OnInit, AfterViewInit {

    breadCrumbItems: Array<{}>;
    error = '';
    optionForm: FormGroup;
    submitted = false;
    hidden: boolean;
    id: number;
    options: Observable<Option[]>;
    availableTargets: ModelType[];
    @ViewChild('selectTarget') selectTarget: NgSelectComponent;
    @ViewChild('availableTargetFieldsSelector') availableTargetFieldsSelector: NgSelectComponent;
    availableTargetFields: string[];

    constructor(private fb: FormBuilder,
                public configService: ConfigService,
                private optionService: OptionService,
                private router: Router,
                private alertService: ToastrService,
                private cdr: ChangeDetectorRef,
                route: ActivatedRoute
    ) {
        this.id = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.breadCrumbItems = [{label: 'Options'}, {label: 'Create Option', active: true}];
        this.options = this.optionService.getAllOptions().pipe(map(result => result.results));
        if (this.id) {
            this.optionService.findOptionById(this.id).subscribe((res) => {
                this.buildForm(res);
            });
        } else {
            this.buildForm(new Option());
        }
    }

    get f() {
        return this.optionForm.controls;
    }

    ngAfterViewInit(): void {
        this.availableTargets = this.configService.targets;
    }

    buildForm(option: Option) {
        this.optionForm = this.fb.group({
            id: [option.id],
            key: [option ? option.key : '', [Validators.required]],
            value: [option ? option.value : '', [Validators.required]],
            targetField: [option ? option.targetField : '', [Validators.required]],
            source: [option ? option.source : ''],
            target: [option ? option.target : '', []],
        });
        this.cdr.markForCheck();

    }

    onSourceUpdated(selectedSource: ModelType) {
        this.availableTargets = this.configService
            .targets
            .filter((target) => target !== selectedSource);

        if (selectedSource == this.f.target.value) {
            this.selectTarget.handleClearClick();
            this.cdr.markForCheck();
        }
        this.getAvailableTargetFields();
    }

    onTargetUpdated(selectedTarget: ModelType) {
        if (selectedTarget == this.f.source.value) {
            this.selectTarget.handleClearClick();
            this.cdr.markForCheck();
        }
        this.getAvailableTargetFields();
    }

    getAvailableTargetFields() {
        this.availableTargetFieldsSelector.setDisabledState(true);
        if (this.f.source.value && this.f.target.value) {
            console.log('Get mappings');
            this.optionService.getFieldsBySourceAndTarget(this.f.source.value, this.f.target.value).subscribe((res) => {
                this.availableTargetFields = res;
                this.availableTargetFieldsSelector.setDisabledState(false);
            }, (error) => {
                if (error.error) {
                    this.alertService.info(error.error.message.replace('Internal Server Error:', ''));
                }
                this.availableTargets = [];
            });
        } else if (this.f.target.value) {
            this.optionService.getFieldsByTarget(this.f.target.value).subscribe((res) => {
                this.availableTargetFields = res;
                this.availableTargetFieldsSelector.setDisabledState(false);
            }, (error) => {
                if (error.error) {
                    this.alertService.info(error.error.message.replace('Internal Server Error:', ''));
                }
                this.availableTargets = [];
            });
        }
    }

    cancel() {
        this.router.navigate(['/admin/options']);
    }

    save() {
        this.error = '';
        this.submitted = true;
        console.log('saving form...', this.optionForm);

        if (this.optionForm.invalid) {
            this.alertService.error('Please check required fields');
            this.error = 'Please check required fields';
            return;
        }
        if (this.id) {
            this.optionService.updateOption(this.optionForm.value).subscribe(() => {
                console.log('Option form saved');
                this.router.navigate(['/admin/options']);
            }, (error) => {
                this.error = error.statusText;
            });
        } else {
            this.optionService.createOption(this.optionForm.value).subscribe(() => {
                console.log('Option form saved');
                this.router.navigate(['/admin/options']);
            }, (error) => {
                this.error = error.statusText;
            });
        }

    }

}
