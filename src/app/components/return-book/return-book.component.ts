import {Component, OnInit} from '@angular/core';
import {BorrowService} from "../../services/borrow.service";
import {BorrowerService} from "../../services/borrower.service";

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss']
})
export class ReturnBookComponent implements OnInit {
  activeBorrows: any;
  borrowers: any;
  form = {
    bookId: null,
    borrowerId: null
  }

  constructor(private borrowService: BorrowService,
              private borrowersService: BorrowerService) {
  }

  ngOnInit(): void {
    this.borrowService.getActiveBorrows()
      .subscribe(response => this.activeBorrows = response)
    this.borrowersService.getBorrowers()
      .subscribe(response => this.borrowers = response)
  }

  returnBook(): void {
    this.borrowService.returnBook(this.form)
      .subscribe(response => console.log("Book returned"))

  }
}
