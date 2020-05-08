import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertService } from '../../../../shared/alert.service';
import { User } from '../../models/user.model';
import { UserService } from '../../user.service';
import { PermissionService } from '../../permission.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  error = '';
  userForm: FormGroup;
  submitted = false;
  hidden: boolean;
  id: number;
  users: Observable<User[]>;
  permissions: String[];

  constructor(
              permissionService: PermissionService,
              private fb: FormBuilder,
              public userService: UserService,
              private router: Router,
              private alertService: AlertService,
              route: ActivatedRoute
              ) {
    this.id = route.snapshot.params['id'];
    this.permissions = permissionService.permissions();
    this.users = userService.users();
  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Users'}, {label: 'Create User', active: true}];
    this.users = this.userService.getAllUsers().pipe(map(result => result.results));
    if (this.id) {
      this.userService.findUserById(this.id).subscribe((res) => {
        this.buildForm(res);
      });
    } else {
      this.buildForm(new User());
    }
  }

  get f() {
    return this.userForm.controls;
  }

  buildForm(user: User) {
    this.userForm = this.fb.group({
      id: [user.id],
      firstName: [user ? user.firstName : '', [Validators.required]],
      lastName: [user ? user.lastName : '', [Validators.required]],
    });
  }

  cancel() {
    this.router.navigate(['/admin/users']);
  }

  save() {
    this.error = '';
    this.submitted = true;
    console.log('saving form...', this.userForm);

    if (this.userForm.invalid) {
      this.alertService.error('Please check required fields');
      this.error = 'Please check required fields';
      return;
    }
    if (this.id) {
      this.userService.updateUser(this.userForm.value).subscribe(() => {
        console.log('User form saved');
        this.router.navigate(['/admin/users']);
      }, (error) => {
        this.error = error.statusText;
      });
    } else {
      this.userService.createUser(this.userForm.value).subscribe(() => {
        console.log('User form saved');
        this.router.navigate(['/admin/users']);
      }, (error) => {
        this.error = error.statusText;
      });
    }

  }

}
