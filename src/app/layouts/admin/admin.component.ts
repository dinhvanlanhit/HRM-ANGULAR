import {Component,OnInit} from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class LayoutAdminComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    document.body.className='skin-2';
  }
}