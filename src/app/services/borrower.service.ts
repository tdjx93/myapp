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

  addBorrower(borrowerData: any) {
    return this.httpClient.post(this.url, borrowerData);
  }
}
