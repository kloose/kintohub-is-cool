import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.scss']
})
export class AdminDashboardComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private config: NgSelectConfig,
              private adminService: AdminService) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Admin'}, {label: 'Dashboard', active: true}];


  }

}
