import {Component, OnInit} from '@angular/core';
import {BorrowService} from "../../../services/borrow.service";
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
              private bookService: BookService ) {
  }

  requestBook(): void {
    this.borrowService
      .createBorrow(this.form)
      .subscribe(res => console.log('Borrow created'))
  }

  ngOnInit(): void {
    this.bookService.getAvailable()
      .subscribe(response => this.books = response)
  }
}
