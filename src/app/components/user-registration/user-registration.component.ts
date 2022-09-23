import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  roles: any
  form = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  errors: any

  constructor(private userService: UserService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  register(): void {
    this.userService.register(this.form)
      .subscribe(response => {
        console.log("User registered");
        this.router.navigate(['/login']);
      })
  }

}
