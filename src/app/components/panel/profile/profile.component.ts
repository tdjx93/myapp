import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    role: ''
  };

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getMe()
      .subscribe(response => this.form = response)
  }

  updateProfile() {
    this.userService.updateProfile(this.form)
      .subscribe(result => {
        console.log('User profile updated')
        this.router.navigate(['/profile'])
      });
  }

}
