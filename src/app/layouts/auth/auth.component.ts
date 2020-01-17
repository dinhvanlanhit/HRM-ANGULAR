import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../services';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class LayoutAuthComponent implements OnInit {
  constructor(
         private router: Router,
        private _AuthService: AuthService
  ) { }
  ngOnInit() {
         document.body.className='login-layout light-login';
        // const HRM_APP = this._AuthService.HRM_APP_VALUE;
        // if (HRM_APP) {
        //     this.router.navigate(['/dashboard']);
        //     return true;
        // }else{
        //   document.body.className='login-layout light-login';
        // }
        
  }
}