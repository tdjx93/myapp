import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BorrowerService} from "../../../services/borrower.service";

@Component({
  selector: 'app-borrower-history-list',
  templateUrl: './my-borrow-list.component.html',
  styleUrls: ['./my-borrow-list.component.scss']
})
export class MyBorrowListComponent implements OnInit {
  history: any;

  constructor(private borrowerService: BorrowerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.borrowerService.getMyBorrowList()
        .subscribe(response => this.history = response)
    });
    // this.route.params.subscribe(params => {
    //   this.borrowerService.getBorrowerById(+params['id'])
    //     .subscribe(response => this.borrower = response)
    // });
  }

}
