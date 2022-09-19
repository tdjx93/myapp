import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BorrowerService} from "../../services/borrower.service";

@Component({
  selector: 'app-borrower-history-list',
  templateUrl: './borrower-history-list.component.html',
  styleUrls: ['./borrower-history-list.component.scss']
})
export class BorrowerHistoryListComponent implements OnInit {
  history: any;
  borrower: any;

  constructor(private borrowerService: BorrowerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.borrowerService.getHistory(+params['id'])
        .subscribe(response => this.history = response)
    });
    this.route.params.subscribe(params => {
      this.borrowerService.getBorrowerById(+params['id'])
        .subscribe(response => this.borrower = response)
    });
  }

}
