import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  form = {
    title: '',
    author: '',
    isbn: ''
  };

  constructor(private bookService: BookService) {
  }

  saveBook(): void {
    this.bookService
      .createBook(this.form)
      .subscribe(res => {
        console.log('Book created');
      })
  }

  ngOnInit(): void {
  }
}
