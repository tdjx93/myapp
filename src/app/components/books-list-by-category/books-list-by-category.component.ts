import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-books-list-by-category',
  templateUrl: './books-list-by-category.component.html',
  styleUrls: ['./books-list-by-category.component.scss']
})
export class BooksListByCategoryComponent implements OnInit {
  books: any;
  categories: any;
  selectedCategoryId: number | null;


  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private route: ActivatedRoute) {
    this.selectedCategoryId = null;
  }

  loadBooks(): void {
    this.bookService.getBooksByCategory(this.selectedCategoryId)
      .subscribe(response => this.books = response)
  }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(response => this.categories = response)
  }

}
