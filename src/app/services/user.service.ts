import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  register(userData: any) {
    return this.httpClient.post('/api/register', userData);
  }

  login(userData: any): any {
    return this.httpClient.post('/api/login', userData);
  }

  logout(): any {
    sessionStorage.removeItem('token');
  };

  getMe(): any {
    return this.httpClient.get('/api/me');
  }

  updateProfile(updatedUserData: any): any {
    return this.httpClient.post('/api/profile', updatedUserData);
  }

  isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

  getLibrarians() {
    return this.httpClient.get('/api/librarians')
  }
}
