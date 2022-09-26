import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  resultBooks: any;
  keyWord: any;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let routeParams = this.activatedRoute.snapshot.paramMap;
    this.keyWord = routeParams.get("keyWord");
    this.bookService.getByKeyWord(this.keyWord)
      .subscribe(response => this.resultBooks = response);
  }

}
