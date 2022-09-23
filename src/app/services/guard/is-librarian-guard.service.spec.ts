import { TestBed } from '@angular/core/testing';

import { IsLibrarianGuardService } from './is-librarian-guard.service';

describe('IsLibrarianGuardService', () => {
  let service: IsLibrarianGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLibrarianGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
