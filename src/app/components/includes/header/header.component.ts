import { Component, OnInit } from '@angular/core';
import { UserIfosService,AuthService } from '../../../services';
import { Users,UsersInfos} from './../../../models';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {
  UsersInfos: UsersInfos[] = [];
  constructor(
    private _UserIfosService:UserIfosService,
    private _AuthService:AuthService
    ) { }

  ngOnInit() {
    this.loadInfoUser();
  }
  private loadInfoUser() {
        this._UserIfosService.getInfoUser().pipe(first()).subscribe(data => {
            this.UsersInfos = data;
        });
  };
  logout(){
    this._AuthService.logout();
  }
}
