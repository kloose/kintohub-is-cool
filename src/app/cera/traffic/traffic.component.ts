import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cera-summary-dashboard',
	templateUrl: './traffic.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrafficComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}
}
