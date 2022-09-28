import {Component, OnInit} from '@angular/core';
import {BorrowService} from "../../../services/borrow.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-borrows-list',
  templateUrl: './borrows-list.component.html',
  styleUrls: ['./borrows-list.component.scss']
})
export class BorrowsListComponent implements OnInit {
  borrows: any;
  reader: any;

  constructor(private borrowService: BorrowService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.borrowService.getAllBorrows()
      .subscribe(response => this.borrows = response)
  }
}
