import {Component} from '@angular/core';
import {BookService} from "./services/book.service";
import {BorrowerService} from "./services/borrower.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: any;
  borrowers: any;

  constructor(
    private bookService: BookService,
    private borrowerService: BorrowerService
  ) {
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(response => this.books = response)
    // this.borrowerService.getBorrowers()
    //   .subscribe(response => this.borrowers = response)
  }
}
