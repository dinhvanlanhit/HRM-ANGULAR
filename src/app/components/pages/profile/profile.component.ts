import { Component, OnInit } from '@angular/core';
import { UserIfosService } from '../../../services';
import { UsersInfos} from './../../../models';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UsersInfos: UsersInfos[] = [];
  constructor(private _UserIfosService:UserIfosService){}
  ngOnInit() {
      this.GetProFile();
  }
  private GetProFile(){
    this._UserIfosService.getInfoUser().pipe(first()).subscribe(UsersInfos => {
      this.UsersInfos = UsersInfos;
      console.log(UsersInfos);
    });
  }
}
