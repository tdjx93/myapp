import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  private url ="/api/borrows"

  constructor(private httpClient: HttpClient) { }

  createBorrow(borrowData: any) {
    return this.httpClient.post(this.url, borrowData);
  }
}
