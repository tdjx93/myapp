import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {BorrowService} from "../../../services/borrow.service";

@Component({
  selector: 'app-my-borrows',
  templateUrl: './my-borrows.component.html',
  styleUrls: ['./my-borrows.component.scss']
})
export class MyBorrowsComponent implements OnInit {
  myBorrows: any;

  constructor(private userService: UserService,
              private borrowService: BorrowService) {
  }

  ngOnInit(): any {
    this.borrowService.getBorrowListByCurrentUser()
      .subscribe(response => this.myBorrows = response);
  }

}
