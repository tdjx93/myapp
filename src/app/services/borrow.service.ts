import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  private url = "/api/borrows"


  constructor(private httpClient: HttpClient) {
  }

  createBorrow(borrowData: any) {
    return this.httpClient.post('api/borrows/borrow', borrowData);
  }

  getActiveBorrows() {
    return this.httpClient.get("api/borrows/active");
  }

  getAllBorrows() {
    return this.httpClient.get('/api/borrows/')
  }

  getBorrowListByCurrentUser() {
    return this.httpClient.get('/api/borrows/me');
  }

  returnBook(returnData: any) {
    return this.httpClient.post("api/borrows/return", returnData);
  }
}
