import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../../../services/author.service";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  author: any;
  authorBooks: any;

  constructor(private authorService: AuthorService,
              private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let authorName = routeParams.get('name');
    this.authorService.getByName(authorName)
      .subscribe(response => this.author = response);
    this.bookService.getByAuthor(authorName)
      .subscribe(response => this.authorBooks = response);
  }

}
