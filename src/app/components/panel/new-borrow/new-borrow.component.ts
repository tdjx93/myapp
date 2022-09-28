import {Component, OnInit} from '@angular/core';
import {BorrowService} from "../../../services/borrow.service";
import {BookService} from "../../../services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-borrow',
  templateUrl: './new-borrow.component.html',
  styleUrls: ['./new-borrow.component.scss']
})
export class NewBorrowComponent implements OnInit {
  books: any;
  form = {
    bookId: null,
  };
  param = "available_only";


  constructor(private borrowService: BorrowService,
              private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.bookService.getByParam(this.param, true)
      .subscribe(response => this.books = response)
  }

  confirmRequest() {
    this.router.navigate(['/new-borrow/confirm']);
  }

  requestBook(): void {
    this.borrowService
      .createBorrow(this.form)
      .subscribe(res => console.log('Borrow created'))
  }

}
