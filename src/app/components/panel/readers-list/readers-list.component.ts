import {Component, OnInit} from '@angular/core';
import {ReaderService} from "../../../services/reader.service";
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
    this.userService.getByRole(this.READERS)
      .subscribe(response => this.readers = response)
  }

}
