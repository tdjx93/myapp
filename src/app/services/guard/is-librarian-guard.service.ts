import {Injectable} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class IsLibrarianGuardService {
  LIBRARIAN_ROLE = 'LIBRARIAN';
  ADMIN_ROLE = 'ADMIN';


  constructor(private authentication: AuthenticationService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (!this.authentication.me) return true;
    if (!(this.authentication.me.role == this.ADMIN_ROLE || this.authentication.me.role == this.LIBRARIAN_ROLE)) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
