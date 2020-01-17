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
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
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
      events: [
        {
          title: 'All Day Event',
          start: new Date(y, m, d),
          className: 'label-important'
        },
      ],
      dayRender:function (day,cell,view)
      {
        console.log(day._d)
        // $(".fc-content-skeleton table thead tr td").addClass('fc-event-container');
        // var current_day = day.getDay();
        // if(current_day==0){
        //         $(".fc-content-skeleton table thead tr td").append('<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end label-important"><div class="fc-content"> <span class="fc-title">08:00 - 17:00</span></div></a>'); 
        // }
       
  
      }
    });
  }
} 
