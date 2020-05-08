import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../user.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, AfterViewInit{
  breadCrumbItems: Array<{}>;

  data: User[];
  ColumnMode = ColumnMode;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Admin' }, { label: 'Users', active: true }];
  }

  ngAfterViewInit(): void {
    this.load();
  }

  load() {
    this.userService.getAllUsers().subscribe((res) => {
      this.data = res.results;
      console.log('Data', res);
    });
  }

  edit(row) {
    console.log('row', row);
    this.router.navigate([`/admin/user/${row.id}`]);
  }

}
