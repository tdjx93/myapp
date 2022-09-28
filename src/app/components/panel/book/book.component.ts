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
  param = "title"
  paramValue: any;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    this.paramValue = routeParams.get('title');
    this.bookService.getByParam(this.param, this.paramValue)
      .subscribe(response => this.book = response[0]);
  }

}
