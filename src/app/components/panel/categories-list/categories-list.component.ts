import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: any

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe(response => this.categories = response)
  }

}
