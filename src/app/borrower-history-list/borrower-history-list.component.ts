import { Component, OnInit } from '@angular/core';
import {BorrowerHistoryListService} from "../services/borrower-history-list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-borrower-history-list',
  templateUrl: './borrower-history-list.component.html',
  styleUrls: ['./borrower-history-list.component.scss']
})
export class BorrowerHistoryListComponent implements OnInit {
history: any;

  constructor(private borrowerHistoryListService: BorrowerHistoryListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.borrowerHistoryListService.getHistory(+params['id'])
        .subscribe(response => this.history = response)
    });
  }

}
