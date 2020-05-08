// Angular
import { Component, Input, OnInit } from '@angular/core';
// Lodash
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface MetabaseData {
	title: string;
	valueClass?: string;
	desc?: string;
	embedURL: SafeResourceUrl;
}

@Component({
	selector: 'app-metabase',
	templateUrl: './metabase-view.component.html',
	styleUrls: ['./metabase-view.component.scss']
})
export class MetabaseViewComponent implements OnInit {

	@Input() data: MetabaseData;

	constructor(private ds: DomSanitizer) {
	  console.log('metabase viewer');
	}

	ngOnInit() {
	  console.log('Loading with data', this.data);
	}

}
