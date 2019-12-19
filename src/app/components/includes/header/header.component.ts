import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
 
})
export class HeaderComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

  ngOnInit() {
    this.getInfoUser();
  }
  getInfoUser(){
    this._AuthService.getInfoUser();
  }
  logout(){
    this._AuthService.logout();
  }
}