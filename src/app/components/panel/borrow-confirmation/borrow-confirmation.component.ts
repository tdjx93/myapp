import {Component, OnInit} from '@angular/core';
import {BorrowService} from "../../../services/borrow.service";

@Component({
  selector: 'app-borrow-confirmation',
  templateUrl: './borrow-confirmation.component.html',
  styleUrls: ['./borrow-confirmation.component.scss']
})
export class BorrowConfirmationComponent implements OnInit {
  requestedBooks: any;
  form = {
    bookId: null
  };

  constructor(private borrowService: BorrowService) {
  }

  ngOnInit(): void {

  }

  requestBook(): void {
    this.borrowService
      .createBorrow(this.form)
      .subscribe(res => console.log('Borrow created'))
  }
}
