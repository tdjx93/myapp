import { Component, OnInit } from '@angular/core';
import {BorrowerHistoryListService} from "../services/borrower-history-list.service";

@Component({
  selector: 'app-borrower-history-list',
  templateUrl: './borrower-history-list.component.html',
  styleUrls: ['./borrower-history-list.component.scss']
})
export class BorrowerHistoryListComponent implements OnInit {
history: any;

  constructor(private borrowerHistoryListService: BorrowerHistoryListService) { }

  ngOnInit(): void {
    this.borrowerHistoryListService.getHistory()
      .subscribe(response => this.history = response)
  }

}
