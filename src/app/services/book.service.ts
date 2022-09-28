import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = '/api/books';

  constructor(private httpClient: HttpClient) {
  }

  getPage(page: number, pageSize: number): any {
    return this.httpClient.get('/api/books/paging?page=' + page + '&page_size=' + pageSize);
  }

  getAll(): any {
    return this.httpClient.get('/api/books');
  }

  getByParam(param: any, paramValue: any) {
    return this.httpClient.get('/api/books?' + param + '=' + paramValue)
  }

  // httpClient.params #TODO

  create(bookData: any) {
    return this.httpClient.post(this.url, bookData);
  }
}
