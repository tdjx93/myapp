import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {CategoryService} from "../../../services/category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-books-list-by-category',
  templateUrl: './books-list-by-category.component.html',
  styleUrls: ['./books-list-by-category.component.scss']
})
export class BooksListByCategoryComponent implements OnInit {
  books: any;
  categories: any;
  selectedCategoryName: number | null;
  param = "category";


  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private route: ActivatedRoute) {
    this.selectedCategoryName = null;
  }

  loadBooks(): void {
    this.bookService.getByParam(this.param, this.selectedCategoryName)
      .subscribe(response => this.books = response)
  }

  ngOnInit(): void {
    let paramMap = this.route.snapshot.paramMap;
    let category = paramMap.get('category');
    if (category)
      this.bookService.getByParam(this.param, category)
        .subscribe(response => this.books = response);

    this.categoryService.getAll()
      .subscribe(response => this.categories = response);
  }

}
