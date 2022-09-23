import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {BorrowerService} from "../../../services/borrower.service";

@Component({
  selector: 'app-my-borrows',
  templateUrl: './my-borrows.component.html',
  styleUrls: ['./my-borrows.component.scss']
})
export class MyBorrowsComponent implements OnInit {
  myBorrows: any;

  constructor(private borrowerService: BorrowerService,
              private userService: UserService) {
  }

  ngOnInit(): any {
    this.borrowerService.getHistoryByUsername(this.userService.getMe().email)
      .subscribe(response => this.myBorrows = response);
  }

}
