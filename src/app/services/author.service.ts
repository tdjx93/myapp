import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient) {
  }

  getAuthors() {
    return this.httpClient.get('/api/authors')
  }

  createAuthor(authorData: any) {
    return this.httpClient.post('/api/authors', authorData)
  }
}
