import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBorrowComponent } from './new-borrow.component';

describe('NewBorrowComponent', () => {
  let component: NewBorrowComponent;
  let fixture: ComponentFixture<NewBorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBorrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
