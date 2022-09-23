import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariansListComponent } from './librarians-list.component';

describe('LibrariansListComponent', () => {
  let component: LibrariansListComponent;
  let fixture: ComponentFixture<LibrariansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrariansListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
