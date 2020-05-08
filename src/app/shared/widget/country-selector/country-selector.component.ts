import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../../pages/contacts/models';

@Component({
	selector: 'app-country-selector',
	templateUrl: './country-selector.component.html',
	styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {

	@Input()
	countries: Country[];
	@Input()
	country: Country;
	@Output()
	eventEmitter: EventEmitter<Country> = new EventEmitter<Country>();

	constructor() {
	}

	ngOnInit() {
	}

	onSelected(country: Country) {
		this.eventEmitter.emit(country);
	}
}
