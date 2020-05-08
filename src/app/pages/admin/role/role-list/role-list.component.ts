import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { Role } from '../../models/role.model';
import { RoleService } from '../../role.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-role-list',
	templateUrl: './role-list.component.html',
})
export class RoleListComponent implements OnInit, AfterViewInit{
  breadCrumbItems: Array<{}>;

  data: Role[];
  ColumnMode = ColumnMode;

  constructor(private roleService: RoleService,
              private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Admin' }, { label: 'Roles', active: true }];
  }

  ngAfterViewInit(): void {
    this.load();
  }

  load() {
    this.roleService.getAllRoles().subscribe((res) => {
      this.data = res.results;
      console.log('Data', res);
    });
  }

  delete(row) {
    Swal.fire({
      title: 'Warning!',
      text: 'Do you want to delete this item?',
      icon: 'error',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      timer: 3000,
      timerProgressBar: true,
    }).then((result) => {
          if (result.value) {
            this.roleService.deleteRole(row.id).subscribe((res) => {
              this.load();
              // Swal.fire(
              //     'Deleted!',
              //     'Your imaginary file has been deleted.',
              //     'success'
              // )
            });
          }
        });
  }

  edit(row) {
    console.log('row', row);
    this.router.navigate([`/admin/role/${row.id}`]);
  }

}
