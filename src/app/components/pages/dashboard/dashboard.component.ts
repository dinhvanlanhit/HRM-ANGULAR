import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services'
import { Users} from './../../../models';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _UserService:UserService) { }

  ngOnInit() {
  }
}
