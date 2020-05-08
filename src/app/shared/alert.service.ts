import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(private tostr: ToastrService) {
    }

    error(message: string) {
        this.tostr.error(message);
    }

    info(message: string) {
        this.tostr.info(message);
    }
    warn(message: string) {
        this.tostr.warning(message);
    }

}