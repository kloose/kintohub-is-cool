import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cera-summary-dashboard',
	templateUrl: './marketing.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketingComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}
}
