import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionService } from '../../admin/option.service';
import { ModelType } from '../../../shared/modelType.model';
import { Option } from '../../admin/models/option.model';
import { EmailAddress } from '../models/email.model';

@Component({
	selector: 'app-email-address',
	templateUrl: './email-address.component.html',
})
export class EmailAddressComponent {

	@Input()
	emailAddress: EmailAddress;
	formGroup: FormGroup;
	tags: Option[];
	@Input()
	submitted = false;

	constructor(private optionService: OptionService,
				private fb: FormBuilder,
				private alertService: ToastrService) {

		this.optionService.getTargetOptions(ModelType.EMAIL_ADDRESS, 'tags')
			.subscribe((res) => {
			this.tags = res;
		}, (error) => {
				console.error(error);
			// this.alertService.error(error.error.message);
		});

		this.formGroup = this.fb.group({
			address: [this.emailAddress ? this.emailAddress.address : '', [Validators.required, Validators.email]],
			primary: [this.emailAddress ? this.emailAddress.primary : false, [Validators.required]],
			tags: [this.emailAddress ? this.emailAddress.tags : [], [Validators.required]],
		});
	}

	get f() {
		return this.formGroup.controls;
	}
}
