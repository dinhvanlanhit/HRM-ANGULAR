import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services';

@Injectable({ providedIn: 'root' })
export class CheckAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private _AuthService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const HRM_APP = this._AuthService.HRM_APP_VALUE;
        if (HRM_APP) {
             this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
        }else{
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }
}