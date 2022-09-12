import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url = 'http://localhost:8080/events';

  constructor(private httpClient: HttpClient) { }

  getEvents(){
    return this.httpClient.get(this.url);
  }
}
