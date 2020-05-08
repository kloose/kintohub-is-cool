import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from '../../models/role.model';
import { RoleService } from '../../role.service';
import { AlertService } from '../../../../shared/alert.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html'
})
export class RoleEditComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  error = '';
  roleForm: FormGroup;
  submitted = false;
  hidden: boolean;
  id: number;
  roles: Observable<Role[]>;

  constructor(private fb: FormBuilder,
              private roleService: RoleService,
              private router: Router,
              private alertService: AlertService,
              route: ActivatedRoute
              ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Roles'}, {label: 'Create Role', active: true}];
    this.roles = this.roleService.getAllRoles().pipe(map(result => result.results));
    if (this.id) {
      this.roleService.findRoleById(this.id).subscribe((res) => {
        this.buildForm(res);
      });
    } else {
      this.buildForm(new Role());
    }
  }

  get f() {
    return this.roleForm.controls;
  }

  buildForm(role: Role) {
    this.roleForm = this.fb.group({
      id: [role.id],
      name: [role ? role.name : '', [Validators.required]],
      users: [role ? role.users : [], []],
      permissions: [role ? role.permissions : [], []],
    });
  }

  cancel() {
    this.router.navigate(['/admin/roles']);
  }

  save() {
    this.error = '';
    this.submitted = true;
    console.log('saving form...', this.roleForm);

    if (this.roleForm.invalid) {
      this.alertService.error('Please check required fields');
      this.error = 'Please check required fields';
      return;
    }
    if (this.id) {
      this.roleService.updateRole(this.roleForm.value).subscribe(() => {
        console.log('Role form saved');
        this.router.navigate(['/admin/roles']);
      }, (error) => {
        this.error = error.statusText;
      });
    } else {
      this.roleService.createRole(this.roleForm.value).subscribe(() => {
        console.log('Role form saved');
        this.router.navigate(['/admin/roles']);
      }, (error) => {
        this.error = error.statusText;
      });
    }

  }

}
