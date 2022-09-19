import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = '/api/books';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token') })
  };

  constructor(private httpClient: HttpClient) {
  }

  getBooks() {
    return this.httpClient.get('/api/books?page=1&page_size=5');
  }

  getBooksByPage(page: number, pageSize: number): any {
    return this.httpClient.get('/api/books?page='+page+'&page_size='+pageSize, this.httpOptions)
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
