import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url = '/api/events';

  constructor(private httpClient: HttpClient) { }

  getEvents(){
    return this.httpClient.get(this.url);
  }
}
