import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ReaderService} from "../../../services/reader.service";

@Component({
  selector: 'app-my-borrows',
  templateUrl: './my-borrows.component.html',
  styleUrls: ['./my-borrows.component.scss']
})
export class MyBorrowsComponent implements OnInit {
  myBorrows: any;

  constructor(private borrowerService: ReaderService,
              private userService: UserService) {
  }

  ngOnInit(): any {
    this.borrowerService.getHistoryByUsername(this.userService.getMe().email)
      .subscribe(response => this.myBorrows = response);
  }

}
