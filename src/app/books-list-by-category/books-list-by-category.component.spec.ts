import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListByCategoryComponent } from './books-list-by-category.component';

describe('BooksListByCategoryComponent', () => {
  let component: BooksListByCategoryComponent;
  let fixture: ComponentFixture<BooksListByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
