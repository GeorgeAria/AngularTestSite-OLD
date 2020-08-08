import { TestBed } from '@angular/core/testing';

import { ChildCommentsDataService } from './child-comments-data.service';

describe('ChildCommentsDataService', () => {
  let service: ChildCommentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildCommentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
