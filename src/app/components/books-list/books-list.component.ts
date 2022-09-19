import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: any;
  showOnlyAvailable: boolean

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
    this.bookService.getBooks()
      .subscribe(response => this.books = response)
  }
}
