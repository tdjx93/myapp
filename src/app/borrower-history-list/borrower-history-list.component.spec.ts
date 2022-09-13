import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerHistoryListComponent } from './borrower-history-list.component';

describe('BorrowerHistoryListComponent', () => {
  let component: BorrowerHistoryListComponent;
  let fixture: ComponentFixture<BorrowerHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerHistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowerHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
