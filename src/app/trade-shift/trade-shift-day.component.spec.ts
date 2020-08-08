import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeShiftDayComponent } from './trade-shift-day.component';

describe('TradeShiftDayComponent', () => {
  let component: TradeShiftDayComponent;
  let fixture: ComponentFixture<TradeShiftDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeShiftDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeShiftDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
