import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = '/api/books';

  constructor(private httpClient: HttpClient) {
  }

  get(page: number, pageSize: number): any {
    return this.httpClient.get('/api/books?page=' + page + '&page_size=' + pageSize)
  }

  getAvailable(): any {
    return this.httpClient.get('/api/books-available');
  }

  getByTitle(title: any): any {
    let formattedTitle = title.replaceAll(' ', '+');
    return this.httpClient.get('/api/books/' + formattedTitle + '/')
  }

  getByAuthor(name: any): any{
    let formattedName = name.replaceAll(' ', '+');
    return this.httpClient.get('/api/books/author/' + formattedName + '/')
  }

  getByCategoryName(category: any) {
    return this.httpClient.get('/api/books/category/' + category + '/')
  }

  getByKeyWord(keyWord: any): any {
    return this.httpClient.get('/api/books/search?key_word=' + keyWord)
  }

  // httpClient.params #TODO

  getAvailableBooksPage(page: number, pageSize: number): any {
    return this.httpClient.get('/api/books-available-page?page=' + page + '&page_size=' + pageSize);
  }

  create(bookData: any) {
    return this.httpClient.post(this.url, bookData);
  }
}
