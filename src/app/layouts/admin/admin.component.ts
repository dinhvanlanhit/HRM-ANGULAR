import {Component,OnInit,Input} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UsersInfos } from './../../models';
import { ProfileService } from './../../services';
import { environment } from '../../../environments/environment';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class LayoutAdminComponent implements OnInit {
 
  UsersInfos: UsersInfos[] = [];
  constructor(private _ProfileService:ProfileService) { }
  ngOnInit() {
    this.GetSkinClass();
  }
  private GetSkinClass(){
    return this._ProfileService.getProFile().pipe(first()).subscribe(data => {
      this.UsersInfos = data;
      document.body.className= data['skin_class']==null?'no-skin':data['skin_class'];
    });
  }

}
