import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GMVModel, GMVMTDModel, MarketingModel, TrafficModel } from '../cera.model';
import { emailSentBarChart, statData, transactions } from '../cera-data';
import { ChartType } from '../../pages/tasks/list/list.model';
import { madCumulativeGAV } from 'src/app/pages/dashboard/data';

@Component({
	selector: 'app-cera-gmv-dashboard',
	templateUrl: './gmv.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmvComponent implements OnInit {

	emailSentBarChart: ChartType;
	madCumulativeGAV: ChartType;
	transactions;
	statData;
	gmv: GMVModel;
	gmvMTD: GMVMTDModel;
	traffic: TrafficModel;
	marketing: MarketingModel;

	constructor() { }

	ngOnInit() {

		this.load();
		this.fetchData();
	}

	load() {

		this.gmv = {
			gross: 13475,
			net: 9475,
			returns: 4000,
			numberOfOrders: 4,
			aov: 3500,
		};

		this.gmvMTD = {
			cumulative: 52000,
			target: 60000,
			volume: 8000,
			varianceTcp: 10
		};

		this.traffic = {
			uniqueVisits: 13475,
			conversionRate: 0.12,
			itemsAddedToCart: 4000,
			bounceRate: 51.43,
		};

		this.marketing = {
			spend: 2500,
			roi: 2.3,
			spendVsGMVPCT: 23,
		};

	}
	private fetchData() {
		this.emailSentBarChart = emailSentBarChart;
		this.madCumulativeGAV = madCumulativeGAV;
		this.transactions = transactions;
		this.statData = statData;
	}

}
