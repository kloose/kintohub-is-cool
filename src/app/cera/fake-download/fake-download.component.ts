import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-fake-download',
	templateUrl: './fake-download.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FakeDownloadComponent implements OnInit {


	constructor() { }

	ngOnInit() {

	}

}
