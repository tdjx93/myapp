import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-available-books-list',
  templateUrl: './available-books-list.component.html',
  styleUrls: ['./available-books-list.component.scss']
})
export class AvailableBooksListComponent implements OnInit {
  availableBooks: any;
  page: any;
  pageSize: any;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.page = 1;
   this.pageSize = 2;

    this.bookService.getAvailableBooks()
      .subscribe(response => {
        this.availableBooks = response;
      })
  }
}
