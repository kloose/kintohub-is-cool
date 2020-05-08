import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cera-dashboard',
	templateUrl: './cera.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeraComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}
}
