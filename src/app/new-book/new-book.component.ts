import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  categories: any;
  form = {
    title: '',
    author: '',
    isbn: '',
    category: '',
  };

  constructor(private bookService: BookService,
              private categoryService: CategoryService) {
  }

  saveBook(): void {
    this.bookService
      .createBook(this.form)
      .subscribe(res => {
        console.log('Book created');
      })
  }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(response => this.categories = response)
  }
}
