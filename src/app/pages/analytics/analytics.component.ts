import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-analytics-dashboard',
	templateUrl: './analytics.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyticsComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}
}
