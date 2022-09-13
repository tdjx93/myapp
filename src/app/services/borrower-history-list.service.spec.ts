import { TestBed } from '@angular/core/testing';

import { BorrowerHistoryListService } from './borrower-history-list.service';

describe('BorrowerHistoryListService', () => {
  let service: BorrowerHistoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowerHistoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
