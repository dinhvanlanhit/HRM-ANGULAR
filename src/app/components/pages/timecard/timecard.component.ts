import { Component, OnInit } from '@angular/core';
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);
@Component({
  selector: 'app-timecard',
  templateUrl: './timecard.component.html',
  styleUrls: ['./timecard.component.css']
})
export class TimecardComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    var calendar = $('#calendar').fullCalendar({
      buttonHtml: {
        prev: '<i class="ace-icon fa fa-chevron-left"></i>',
        next: '<i class="ace-icon fa fa-chevron-right"></i>'
      },
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
    });
  }

}
