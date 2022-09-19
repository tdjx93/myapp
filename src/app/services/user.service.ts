import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  register(userData: any){
    return this.httpClient.post('/api/register', userData);
  }

  login(userData: any):any {
    return this.httpClient.post('/api/login', userData);
  }
}
