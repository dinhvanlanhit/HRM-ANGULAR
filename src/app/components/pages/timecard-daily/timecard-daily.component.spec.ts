import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardDailyComponent } from './timecard-daily.component';

describe('TimecardDailyComponent', () => {
  let component: TimecardDailyComponent;
  let fixture: ComponentFixture<TimecardDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
