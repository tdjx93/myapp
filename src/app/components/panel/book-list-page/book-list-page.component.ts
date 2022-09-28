import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.scss']
})
export class BookListPageComponent implements OnInit {
  books: any;
  defaultPage = 1;
  defaultPageSize = 5;
  totalPages: any;
  numberArray: any;


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getPage(this.defaultPage, this.defaultPageSize)
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
    this.bookService.getPage(page, this.defaultPageSize)
      .subscribe(response => this.books = response.content)
  }

}
