import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BorrowerHistoryListService {
  private url ='/api/borrowers/{id}/borrow_history'

  constructor(private httpClient: HttpClient) {
  }

  getHistory(id: any) {
    return this.httpClient.get('/api/borrowers/' + id +'/borrow_history');
  }

}
