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

  getBorrowerById(id: any) {
    return this.httpClient.get(this.url + '/' + id)
  }

  addBorrower(borrowerData: any) {
    return this.httpClient.post(this.url, borrowerData);
  }

  getMyBorrowList() {
    return this.httpClient.get('/api/borrows/me');
  }

  getHistoryByUsername(username: any) {
    return this.httpClient.get('/api/borrows?username=' + username )
  }

}
