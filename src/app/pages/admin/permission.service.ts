import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const URL = `${environment.adminServiceUrl}/user`;

@Injectable()
export class PermissionService {

  constructor(@SkipSelf() private http: HttpClient) {
  }


  permissions() {
    return ['Read', 'Write', 'Delete'];
  }

}
