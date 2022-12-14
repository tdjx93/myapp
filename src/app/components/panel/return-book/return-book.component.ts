import {Component, OnInit} from '@angular/core';
import {BorrowService} from "../../../services/borrow.service";

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss']
})
export class ReturnBookComponent implements OnInit {
  activeBorrows: any;
  form = {
    bookId: null,
  }
  errors: any

  constructor(private borrowService: BorrowService) {
  }

  ngOnInit(): void {
    this.borrowService.getActiveBorrows()
      .subscribe(response => this.activeBorrows = response)
  }

  requestReturn(): void {
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
