import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadersListComponent } from './readers-list.component';

describe('BorrowersListComponent', () => {
  let component: ReadersListComponent;
  let fixture: ComponentFixture<ReadersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
