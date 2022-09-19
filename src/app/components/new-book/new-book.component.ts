import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {CategoryService} from "../../services/category.service";
import {AuthorService} from "../../services/author.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  categories: any;
  authors: any;
  form = {
    title: '',
    authorFullName: '',
    isbn: '',
    bookCategoryName: '',
  };
  errors: any

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private authorService: AuthorService) {
  }

  saveBook(): void {
    this.bookService
      .createBook(this.form)
      .subscribe(
        result => console.log('Book created'),
        response => {
          this.errors = {};
          for (const error of response.error) {
            this.errors[error.field] = error.message;
          }
        }
      )
  }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(response => this.categories = response)
    this.authorService.getAuthors()
      .subscribe(response => this.authors = response)
  }
}
