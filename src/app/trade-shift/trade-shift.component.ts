import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import { User } from '../shared/user-data';
import { CalendarData } from '../shared/calendar-data';
import { CalendarDataService } from '../shared/calendar-data.service';


@Component({
  templateUrl: './trade-shift.component.html',
  styleUrls: ['./trade-shift.component.css']
})
export class TradeShiftComponent implements OnInit {

  errorMessage = '';

  calendarData: CalendarData[] = [];

  constructor(private calendarDataService: CalendarDataService) { }

  ngOnInit(): void {
    this.calendarDataService.getCalendarInfo().subscribe({

      //"next" is the function/key that will process the next emitted value.
      //"products" is that emitted value.

      next: calendarData => {
        this.calendarData = calendarData;
      },

      //"error" is the function/key that will process when an error occurs.

      error: err => this.errorMessage = err
    });
  }

}
