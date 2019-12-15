import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class LayoutAuthComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    
    document.body.className='login-layout light-login';
  }
}