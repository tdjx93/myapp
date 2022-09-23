import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: any;
  showOnlyAvailable: boolean
  defaultPage: any
  defaultPageSize: any
  totalPages: any
  numberArray: any

  constructor(private bookService: BookService) {
    this.showOnlyAvailable = false
  }

  get filteredBooks() {
    if (!this.showOnlyAvailable) {
      return this.books;
    } else {
      return this.books.filter(book => book.availabilityStatus === true)
    }
  }

  ngOnInit() {
    this.defaultPage = 1;
    this.defaultPageSize = 5;

    this.bookService.getBooksByPage(this.defaultPage, this.defaultPageSize)
      .subscribe(response => {
        this.books = response.content;
        this.totalPages = response.totalPages;
        this.numberArray = this.numberSequence(this.totalPages)
      })
  }

  numberSequence(n: number): Array<number> {
    return Array(n);
  }

  loadPage(page: number) {
    this.bookService.getBooksByPage(page, this.defaultPageSize)
      .subscribe(response => this.books = response.content)
  }
}
