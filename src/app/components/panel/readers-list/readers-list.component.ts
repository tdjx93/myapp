import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './readers-list.component.html',
  styleUrls: ['./readers-list.component.scss']
})
export class ReadersListComponent implements OnInit {
  private READERS = 'readers';
  readers: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllByRole(this.READERS)
      .subscribe(response => this.readers = response)
  }

}
