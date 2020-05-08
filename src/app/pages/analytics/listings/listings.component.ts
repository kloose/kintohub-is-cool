import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-dave-dashboard',
	templateUrl: './listings.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingsComponent implements OnInit {

  // data: MetabaseData;
  url;
	constructor(
				private router: Router,
        private ds: DomSanitizer) {
	}

	ngOnInit() {
	  this.url = this
      .ds.bypassSecurityTrustResourceUrl('http://localhost:3000/public/dashboard/14ae05a1-4ed2-49c5-9615-90ab9f112d29');

    // this.data = {
    //   title: 'Test Dashboard',
    //   embedURL: 'http://localhost:3000/public/dashboard/2648f9ec-6421-4567-a0b5-cc3fe758414a'
    // }
	}
}
