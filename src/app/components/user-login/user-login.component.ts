import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  form = {
    email: '',
    password: ''
  };
  errors: any;

  constructor(
    private userService: UserService
  ) {  }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.form)
      .subscribe(response => sessionStorage.setItem("token", response.token) );
  }

}
