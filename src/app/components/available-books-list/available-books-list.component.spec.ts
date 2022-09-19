import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBooksListComponent } from './available-books-list.component';

describe('AvailableBooksListComponent', () => {
  let component: AvailableBooksListComponent;
  let fixture: ComponentFixture<AvailableBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableBooksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
