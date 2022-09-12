import {Component} from '@angular/core';
import {EventService} from "./services/event.service";
import {ArticleService} from "./services/article.service";
import {BookService} from "./services/book.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  events: any;
  articles: any;
  books: any;

  constructor(private eventService: EventService,
              private articleService: ArticleService,
              private bookService: BookService) {
  }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(response => {
        this.events = response;
      });
    this.articleService.getArticles()
      .subscribe(response => this.articles = response)
    this.bookService.getBooks()
      .subscribe(response => this.books = response)
  }
}

