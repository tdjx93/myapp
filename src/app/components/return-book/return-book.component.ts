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
  errors: any

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
      .subscribe(
        result => console.log("Book returned"),
        response => {
          this.errors = {};
          for (const error of response.error) {
            this.errors[error.field] = error.message;
          }
        }
      )

  }
}
