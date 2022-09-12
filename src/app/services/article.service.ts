import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private url = '/api/articles';

  constructor(private httpClient: HttpClient) { }

  getArticles(){
    return this.httpClient.get(this.url);
  }
}
