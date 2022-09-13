import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.service";
import {ArticleService} from "../services/article.service";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: any;

  constructor(private eventService: EventService,
              private articleService: ArticleService,
              private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(response => this.books = response)
  }
}
