import {Component,OnInit,Input} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UsersInfos } from './../../models';
import { ProfileService } from './../../services';
import { environment } from '../../../environments/environment';
import { first } from 'rxjs/operators';
import { AuthService } from '../../services';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class LayoutAdminComponent implements OnInit {
 
  UsersInfos: UsersInfos[] = [];
  constructor(
    private _ProfileService:ProfileService,
    private router: Router,
    private _AuthService: AuthService
  ) { }
  ngOnInit() {
    const HRM_APP = this._AuthService.HRM_APP_VALUE;
    if (!HRM_APP) {
      this.router.navigate(['/auth/login']);
      return true;
    }
    this.GetSkinClass();
  }
  private GetSkinClass(){
    this.UsersInfos  = JSON.parse(localStorage.getItem('INFO'));
    document.body.className = this.UsersInfos['skin_class'];
  }

}
