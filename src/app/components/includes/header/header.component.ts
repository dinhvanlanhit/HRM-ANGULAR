import { Component, OnInit ,Input} from '@angular/core';
import { ProfileService,AuthService } from '../../../services';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {
  @Input('full_name') full_name :String;
  @Input('avatar') avatar :String;
  constructor(
    private _AuthService:AuthService
    ) { }
  ngOnInit() {
  }
  logout(){
    this._AuthService.logout();
  }
}
