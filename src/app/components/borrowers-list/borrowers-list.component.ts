import {Component, OnInit} from '@angular/core';
import {BorrowerService} from "../../services/borrower.service";

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.scss']
})
export class BorrowersListComponent implements OnInit {
  borrowers: any;

  constructor(private borrowerService: BorrowerService) {
  }

  ngOnInit(): void {
    this.borrowerService.getBorrowers()
      .subscribe(response => this.borrowers = response)
  }

}
