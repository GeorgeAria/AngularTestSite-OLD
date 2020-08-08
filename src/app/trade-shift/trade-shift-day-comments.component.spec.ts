import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeShiftDayCommentsComponent } from './trade-shift-day-comments.component';

describe('TradeShiftDayCommentsComponent', () => {
  let component: TradeShiftDayCommentsComponent;
  let fixture: ComponentFixture<TradeShiftDayCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeShiftDayCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeShiftDayCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
