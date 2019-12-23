import { Component, OnInit } from '@angular/core';
import { UserService,AuthService } from '../../../services'
import { Users} from './../../../models';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {
  currentUser: Users;
  users: Users[] = [];
  constructor(
    private _UserService:UserService,
    private _AuthService:AuthService
    ) { }

  ngOnInit() {
    this.loadInfoUser();
  }
  private loadInfoUser() {
        this._UserService.getInfoUser().pipe(first()).subscribe(users => {
            this.users = users;

        });
  };
  logout(){
    this._AuthService.logout();
  }
}
