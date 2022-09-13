import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {
  private url = '/api/borrowers'

  constructor(private httpClient: HttpClient) {
  }

  getBorrowers() {
    return this.httpClient.get(this.url);
  }
}
