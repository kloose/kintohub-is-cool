import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '@angular/cli/models/interface';

@Component({
	selector: 'app-option-selector',
	templateUrl: './option-selector.component.html',
	styleUrls: ['./option-selector.component.scss']
})
export class OptionSelectorComponent implements OnInit {

	@Input()
	options: Option[];

	@Input()
	option: Option;
	@Output()
	eventEmitter: EventEmitter<Option> = new EventEmitter<Option>();

	constructor() {
	}

	ngOnInit() {
	}

	onSelected(option: Option) {
		this.eventEmitter.emit(option);
	}

}
