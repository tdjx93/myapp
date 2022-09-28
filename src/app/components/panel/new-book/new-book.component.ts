import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {CategoryService} from "../../../services/category.service";
import {AuthorService} from "../../../services/author.service";
import {Router} from "@angular/router";

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
    authorName: '',
    isbn: '',
    bookCategoryName: '',
  };
  errors: any

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private authorService: AuthorService,
              private router: Router
  ) {
  }

  saveBook()
    :
    void {
    this.bookService
      .create(this.form)
      .subscribe(
        result => {
          console.log('Book created');
          this.router.navigate(['/books']);
        },
        response => {
          this.errors = {};
          for (const error of response.error) {
            this.errors[error.field] = error.message;
          }
        }
      )
  }

  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe(response => this.categories = response)
    this.authorService.get()
      .subscribe(response => this.authors = response)
  }
}
