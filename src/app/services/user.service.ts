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
    return this.httpClient.post('/api/users/register', userData);
  }

  login(userData: any): any {
    return this.httpClient.post('/api/login', userData);
  }

  logout(): any {
    sessionStorage.removeItem('token');
  };

  getProfileData(): any {
    return this.httpClient.get('/api/users/me');
  }

  updateProfileData(updatedUserData: any): any {
    return this.httpClient.post('/api/users/profile', updatedUserData);
  }

  isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

  getAllByRole(role: any): any {
    return this.httpClient.get('/api/users/' + role)
  }

  getById(id: any): any {
    return this.httpClient.get('/api/users/' + id)
  }

}
