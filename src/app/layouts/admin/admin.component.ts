import {Component,OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UsersInfos } from './../../models';
import { UserIfosService } from './../../services';
import { environment } from '../../../environments/environment';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class LayoutAdminComponent implements OnInit {
  UsersInfos: UsersInfos[] = [];
  constructor(private _UserIfosService:UserIfosService) { }
  ngOnInit() {
    this.GetSkinClass();
  }
  private GetSkinClass(){
   return this._UserIfosService.getInfoUser().pipe(first()).subscribe(data => {
      this.UsersInfos = data;
      document.body.className= data['skin_class']==null?'no-skin':data['skin_class'];
  });
  }

}
