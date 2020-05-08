import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const URL = `${environment.adminServiceUrl}/apsys/simulator`;

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {
  }

}
