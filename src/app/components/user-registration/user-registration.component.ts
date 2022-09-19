import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  roles: any
  form ={
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  errors :any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register():void {
    this.userService.register(this.form)
      .subscribe(result => console.log("User registered"))
  }

}
