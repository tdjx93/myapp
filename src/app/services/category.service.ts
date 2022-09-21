import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = "/api/book-categories"

  constructor(private httpClient: HttpClient) {
  }

  getCategories() {
    return this.httpClient.get(this.url);
  }

  addCategory(categoryData: any) {
    return this.httpClient.post(this.url, categoryData)
  }
}
