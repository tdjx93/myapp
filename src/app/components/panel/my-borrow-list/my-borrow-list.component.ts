import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BorrowService} from "../../../services/borrow.service";

@Component({
  selector: 'app-borrower-history-list',
  templateUrl: './my-borrow-list.component.html',
  styleUrls: ['./my-borrow-list.component.scss']
})
export class MyBorrowListComponent implements OnInit {
  history: any;

  constructor(private route: ActivatedRoute,
              private borrowService: BorrowService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.borrowService.getBorrowListByCurrentUser()
        .subscribe(response => this.history = response)
    });
    // this.route.params.subscribe(params => {
    //   this.borrowerService.getBorrowerById(+params['id'])
    //     .subscribe(response => this.borrower = response)
    // });
  }

}
