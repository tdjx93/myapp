import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = '/api/books';

  constructor(private httpClient: HttpClient) {
  }

  getBooks() {
    return this.httpClient.get('/api/books?page=1&page_size=5');
  }

  getBooksByPage(page: number, pageSize: number): any {
    return this.httpClient.get('/api/books?page='+page+'&page_size='+pageSize)
  }

  // httpClient.params #TODO

  getAvailableBooks() {
    return this.httpClient.get('/api/books-available');
  }

  getBooksByCategory(category: any) {
    return this.httpClient.get('/api/books-by-category/' + category)
  }

  createBook(bookData: any) {
    return this.httpClient.post(this.url, bookData);
  }





}
