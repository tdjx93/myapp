import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent implements OnInit {
  private NEW_USERS = 'new-users';
  newUsers: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllByRole(this.NEW_USERS)
      .subscribe(response => this.newUsers = response);
  }

}
