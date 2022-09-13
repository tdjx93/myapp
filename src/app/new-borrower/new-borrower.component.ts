import { Component, OnInit } from '@angular/core';
import {BorrowerService} from "../services/borrower.service";

@Component({
  selector: 'app-new-borrower',
  templateUrl: './new-borrower.component.html',
  styleUrls: ['./new-borrower.component.scss']
})
export class NewBorrowerComponent implements OnInit {
  form = {
    firstName: '',
    lastName: ''
  };

  constructor(private borrowerService: BorrowerService) { }

  saveBorrower(): void {
    this.borrowerService
      .addBorrower(this.form)
      .subscribe(result => console.log('Borrower added'))
  }

  ngOnInit(): void {
  }

}
