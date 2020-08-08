import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCommentsComponent } from './child-comments.component';

describe('ChildCommentsComponent', () => {
  let component: ChildCommentsComponent;
  let fixture: ComponentFixture<ChildCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
