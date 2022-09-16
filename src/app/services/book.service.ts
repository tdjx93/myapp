import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = '/api/books';

  constructor(private httpClient: HttpClient) {
  }

  getBooks() {
    return this.httpClient.get(this.url);
  }

  getAvailableBooks() {
    return this.httpClient.get('/api/books-available');
  }

  getBooksByPage(page: any) {
    return this.httpClient.get('api/books/page?page=' + page)
  }

  createBook(bookData: any) {
    return this.httpClient.post(this.url, bookData);
  }
}
