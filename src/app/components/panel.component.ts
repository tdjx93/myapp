import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {AuthenticationService} from "../services/authentication.service";


@Component({
  selector: 'app-root',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  ADMIN_ROLE = 'ADMIN';
  LIBRARIAN_ROLE = 'LIBRARIAN';
  READER_ROLE = 'READER';
  NEW_USER = 'NEW_USER'
  me: any;

  constructor(private userService: UserService,
              private authentication: AuthenticationService) {
  }

  ngOnInit() {
    this.userService.getMe()
      .subscribe(response => {
        this.me = response;
        this.authentication.me = response;
      });
  }
}
