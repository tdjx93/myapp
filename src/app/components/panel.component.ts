import {Component} from '@angular/core';
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  me: any;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getMe()
      .subscribe(response => this.me = response);
  }
}
