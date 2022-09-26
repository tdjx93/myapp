import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: any

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    this.bookService.getByTitle(routeParams.get('title'))
      .subscribe(response => this.book = response);
  }

}
