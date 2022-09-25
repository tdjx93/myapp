import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get('/api/authors')
  }

  getByName(name: any) {
    return this.httpClient.get('/api/authors/' + name + '/')
  }

  createAuthor(authorData: any) {
    return this.httpClient.post('/api/authors', authorData)
  }
}
