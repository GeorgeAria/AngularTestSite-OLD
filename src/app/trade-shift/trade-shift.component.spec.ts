import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeShiftComponent } from './trade-shift.component';

describe('TradeShiftComponent', () => {
  let component: TradeShiftComponent;
  let fixture: ComponentFixture<TradeShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
