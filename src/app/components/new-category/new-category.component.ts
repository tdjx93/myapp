import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  form = {
    name: ''
  };
  errors: any

  constructor(private categoryService: CategoryService) {
  }

  saveCategory(): void {
    this.categoryService
      .addCategory(this.form)
      .subscribe(
        result => console.log('Category added'),
        response => {
          this.errors = {};
          for (const error of response.error) {
            this.errors[error.field] = error.message;
          }
        }
      )
  }

  ngOnInit(): void {
  }

}
