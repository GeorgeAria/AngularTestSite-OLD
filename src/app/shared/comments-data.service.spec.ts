import { TestBed } from '@angular/core/testing';

import { CommentsDataService } from './comments-data.service';

describe('CommentsDataService', () => {
  let service: CommentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
