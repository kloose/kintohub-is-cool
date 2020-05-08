import { Component, OnInit } from '@angular/core';

import { ChartType } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
/**
 * Dashboard component
 */
export class DashboardComponent implements OnInit {

  emailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  transactions;
  statData;
  user = {
    name: 'Keith Loose',
    title: 'Software Developer'
  };

  dashboardData = {
    malls: 2,
    revenue: 590055
  };

  constructor() { }

  ngOnInit() {

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    // this.emailSentBarChart = emailSentBarChart;
    // this.monthlyEarningChart = monthlyEarningChart;
    // this.transactions = transactions;
    // this.statData = statData;
  }

}
