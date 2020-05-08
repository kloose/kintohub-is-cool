import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const userManagementPermissionId = 2;
@Component({
	selector: 'app-contacts-management',
	templateUrl: './contacts.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent implements OnInit {
	// Public properties
	// hasUserAccess$: Observable<boolean>;
	// currentUserPermission$: Observable<Permission[]>;

	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 * @param router: Router
	 */
	constructor(
				private router: Router) {
	}

	ngOnInit() {
		// this.currentUserPermission$ = this.store.pipe(select(currentUserPermissions));
		// this.currentUserPermission$.subscribe(permissions => {
		// 	if (permissions && permissions.length > 0) {
		// 		this.hasUserAccess$ =
		// 			this.store.pipe(select(checkHasUserPermission(userManagementPermissionId)));
		// 		this.hasUserAccess$.subscribe(res => {
		// 			if (!res) {
		// 				this.router.navigateByUrl('/error/403');
		// 			}
		// 		});
		// 	}
		// });
	}
}
