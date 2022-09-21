import {Component, OnInit} from '@angular/core';
import {BorrowService} from "../../../services/borrow.service";
import {BorrowerService} from "../../../services/borrower.service";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-new-borrow',
  templateUrl: './new-borrow.component.html',
  styleUrls: ['./new-borrow.component.scss']
})
export class NewBorrowComponent implements OnInit {
  borrowers: any;
  books: any;
  form = {
    bookId: null,
    borrowerId: null
  };


  constructor(private borrowService: BorrowService,
              private borrowersService: BorrowerService,
              private bookService: BookService ) {
  }

  saveBorrow(): void {
    this.borrowService
      .createBorrow(this.form)
      .subscribe(res => console.log('Borrow created'))
  }

  ngOnInit(): void {
    this.borrowersService.getBorrowers()
      .subscribe(response => this.borrowers = response)
    this.bookService.getAvailableBooks()
      .subscribe(response => this.books = response)
  }
}
